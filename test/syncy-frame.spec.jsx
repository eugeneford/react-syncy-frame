import React from 'react';
import { shallow } from 'enzyme';
import SyncyFrame from '../src/syncy-frame';
import Frame from '../src/frame';

describe('SyncyFrame', function () {
  it('is rendered', function () {
    const url = 'http://default.eugeneford.info/';
    const wrapper = shallow(<SyncyFrame src={url}/>);
    const frame = wrapper.find(Frame);
    const frames = wrapper.state('frames');

    frame.simulate('beforeLoad');
    frame.simulate('load', { style: {} }, 0);

    expect(frame).toBeDefined();
    expect(frame.length).toEqual(1);
    expect(frames).toEqual(['http://default.eugeneford.info/', null]);
  });

  it('is not re-rendered with same src', () => {
    const url = 'http://default.eugeneford.info/';
    const wrapper = shallow(<SyncyFrame src={url}/>);

    spyOn(SyncyFrame.prototype, 'render');

    wrapper.setProps({ src: 'http://default.eugeneford.info/' });

    expect(SyncyFrame.prototype.render).toHaveBeenCalledTimes(1);
  });

  it('new src in second frame while if first is active', (done) => {
    const url = 'http://default.eugeneford.info/';
    const nextUrl = 'http://test.eugeneford.info/';
    const wrapper = shallow(<SyncyFrame src={url} onLoad={() => {
      expect(wrapper.state('active')).toEqual(1);
      expect(wrapper.state('frames')).toEqual([null, nextUrl]);
      done();
    }}/>);

    wrapper.setState({ active: 0, frames: ['http://default.eugeneford.info/', null] });
    wrapper.setProps({ src: nextUrl });

    const frame = wrapper.findWhere(n => n.prop('src') === nextUrl);

    frame.simulate('load', { style: {} }, 0);
  });


  it('new src in first frame while if second is active', (done) => {
    const url = 'http://default.eugeneford.info/';
    const nextUrl = 'http://test.eugeneford.info/';
    const wrapper = shallow(<SyncyFrame src={url} onLoad={() => {
      expect(wrapper.state('active')).toEqual(0);
      expect(wrapper.state('frames')).toEqual([nextUrl, null]);
      done();
    }}/>);

    wrapper.setState({ active: 1, frames: [null, 'http://default.eugeneford.info/'] });
    wrapper.setProps({ src: nextUrl });

    const frame = wrapper.findWhere(n => n.prop('src') === nextUrl);

    frame.simulate('load', { style: {} }, 0);
  });

  it('onBeforeLoad is called', function () {
    const url = 'http://default.eugeneford.info/';
    const spy = jasmine.createSpy();
    const wrapper = shallow(<SyncyFrame src={url} onBeforeLoad={spy}/>);
    const frame = wrapper.find(Frame);

    frame.simulate('beforeLoad');

    expect(spy).toHaveBeenCalled();
  });

  it('onLoad is called', function (done) {
    const url = 'http://default.eugeneford.info/';
    const spy = jasmine.createSpy().and.callFake(() => {
      expect(spy).toHaveBeenCalled();
      done();
    });
    const wrapper = shallow(<SyncyFrame src={url} onLoad={spy}/>);
    const frame = wrapper.find(Frame);

    frame.simulate('load', { style: {} }, 0);
  });
});
