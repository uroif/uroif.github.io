import { mount, shallow } from '@vue/test-utils';
import App from '@/App';
import CanvasUI from '@/components/CanvasUI';
import CanvasInspector from '@/components/CanvasInspector';

describe('App.vue', () => {
  let shallowWrapper;
  let mountWrapper;
  let CanvasComponent;
  let CanvasInspectorComponents;

  beforeAll(() => {
    shallowWrapper = shallow(App);
  });
  describe('Initialization Test', () => {
    it('Should Render With The Correct Data', () => {
      expect(shallowWrapper.vm.$data.hoveredOrder)
        .toEqual(-1);
      expect(shallowWrapper.vm.$data.editMode)
        .toBeFalsy();
      expect(shallowWrapper.vm.$data.shapes.length)
        .toBe(3);
    });
    it('Should Render With The Correct Components', () => {
      mountWrapper = mount(App);
      CanvasComponent = mountWrapper.find(CanvasUI);

      expect(CanvasComponent.is(CanvasUI))
        .toBeTruthy();

      CanvasInspectorComponents = mountWrapper.findAll(CanvasInspector);
      expect(CanvasInspectorComponents.is(CanvasInspector))
        .toBeTruthy();
      expect(CanvasInspectorComponents)
        .toHaveLength(3);
    });
    it('Should Give The Components The Right Data', () => {
      // Check canvas ui
      expect(CanvasComponent.props().shapes)
        .toBeDefined();
      expect(CanvasComponent.props().shapes)
        .toHaveLength(3);
      expect(CanvasComponent.props().selectedShape)
        .toEqual(-1);
      // check canvas inspector
      expect(CanvasInspectorComponents.at(0).props().shape)
        .toBeDefined();
      expect(CanvasInspectorComponents.at(0).props().editMode)
        .toBeFalsy();
      expect(CanvasInspectorComponents.at(0).props().selectedShape)
        .toEqual(-1);
    });
  });
  describe('Child-Parent-Child Behaviour Test', () => {
    it('Should Delete Shape when delete button pressed in the inspector', () => {
      const CanvasInspectorComponent = CanvasInspectorComponents.at(0);
      CanvasInspectorComponent.find('.shape_remover_button').trigger('click');
      expect(mountWrapper.vm.$data.shapes)
        .toHaveLength(2);
      expect(CanvasComponent.props().shapes)
        .toHaveLength(2);
    });
    it('Clicking on + Should Render New Shape and Add new Inspector', () => {
      mountWrapper.find('.append-button').trigger('click');
      expect(mountWrapper.vm.$data.shapes)
        .toHaveLength(3);
      expect(CanvasComponent.props().shapes)
        .toHaveLength(3);
      CanvasInspectorComponents = mountWrapper.findAll(CanvasInspector);
      expect(CanvasInspectorComponents)
        .toHaveLength(3);
    });
    it('Clicking on Pin Button should toggle editing mode', () => {
      mountWrapper.find('.edit-button').trigger('click');
      expect(mountWrapper.vm.$data.editMode)
        .toBeTruthy();
      const CanvasInspectorComponent = CanvasInspectorComponents.at(0);
      expect(CanvasInspectorComponent.props().editMode)
        .toBeTruthy();
      mountWrapper.find('.edit-button').trigger('click');
      expect(mountWrapper.vm.$data.editMode)
        .toBeFalsy();
      expect(CanvasInspectorComponent.props().editMode)
        .toBeFalsy();
    });
  });
});
