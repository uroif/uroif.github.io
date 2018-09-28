import Shape from '@/components/shape';
import { mount } from '@vue/test-utils';
import CanvasUI from '@/components/CanvasUI';

describe('CanvasUI.vue', () => {
  let CanvasWrapper;
  const shapes = [
    {
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
    },
  ];

  beforeAll(() => {
    CanvasWrapper = mount(CanvasUI, {
      propsData: {
        shapes,
        selectedShape: -1,
      },
    });
  });
  describe('Initialization Test', () => {
    it('Should Render With The Correct Data', () => {
      expect(CanvasWrapper.props().shapes)
        .toHaveLength(1);
      expect(CanvasWrapper.props().selectedShape)
        .toEqual(-1);
      expect(CanvasWrapper.vm.$data.mutableShapes[0])
        .toBeInstanceOf(Shape);
      expect(CanvasWrapper.vm.$data.shapeFrame)
        .toBe(200);
    });
    it('Call Hover with -1 on mouse leave', () => {
      CanvasWrapper.find('#myCanvas').trigger('mouseleave');
      expect(CanvasWrapper.emitted().hover)
        .not
        .toBeUndefined();
      expect(CanvasWrapper.emitted().hover[0])
        .toEqual([-1]);
    });
    it('Call Hover with 1 on mouse enter', () => {
      CanvasWrapper.find('#myCanvas').trigger('mousemove', { layerY: 150 });
      expect(CanvasWrapper.emitted().hover)
        .not.toBeUndefined();
      expect(CanvasWrapper.emitted().hover[1])
        .toEqual([1]);
    });
    it('Changes the hovered shape/hover', () => {
      CanvasWrapper.setProps({ selectedShape: 1 });
      expect(CanvasWrapper.vm.$data.mutableShapes[0].isHoverd)
        .toBeTruthy();
    });
    it('Changes the hovered shape/unhover', () => {
      CanvasWrapper.setProps({ selectedShape: 2 });
      expect(CanvasWrapper.vm.$data.mutableShapes[0].isHoverd)
        .toBeFalsy();
    });
  });
});
