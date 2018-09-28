import { mount } from '@vue/test-utils';
import CanvasInspector from '@/components/CanvasInspector';

describe('CanvasInspector.vue', () => {
  let CanvasInspectorWrapper;
  const shape = {
    id: Math.floor(Math.random() * Math.floor(1000)),
    order: 1,
    type: 'rectangle',
    props: {
      height: 100,
      width: 100,
      scale: {
        y: 1,
        x: 1,
      },
      radius: 40,
      rotation: 0,
      text: '',
      color: 'red',
    },
  };
  beforeAll(() => {
    CanvasInspectorWrapper = mount(CanvasInspector, {
      propsData: {
        shape,
        editMode: false,
        selectedShape: -1,
      },
    });
  });
  describe('Initialization Test', () => {
    it('Should render with the correct data', () => {
      expect(CanvasInspectorWrapper.props().shape)
        .toBeDefined();
      expect(CanvasInspectorWrapper.vm.$data.mutableShape)
        .toMatchObject(shape);
      expect(CanvasInspectorWrapper.props().selectedShape)
        .toEqual(-1);
    });
  });
  describe('Data manipulation test', () => {
    it('Should Emit changes to parent on props change', () => {
      CanvasInspectorWrapper.vm.$data.mutableShape.props.scale.x += 1;
      expect(CanvasInspectorWrapper.emitted().shapeEdited)
        .toBeTruthy();
    });
  });
});
