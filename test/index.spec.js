import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Frame from '../src/frame';
import SyncyFrame from '../src/syncy-frame';
import ReactSyncyFrame from '../src/index';

describe('index', function () {
  it('ReactSyncyFrame is defined', function () {
    expect(ReactSyncyFrame).toBeDefined();
  });

  it('SyncyFrame is defined', () => {
    expect(SyncyFrame).toBeDefined();
  });

  it('Frame is defined', () => {
    expect(Frame).toBeDefined();
  });
});

import './frame.spec.jsx';
import './syncy-frame.spec.jsx';
