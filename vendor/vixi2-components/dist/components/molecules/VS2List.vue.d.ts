import { VS2ListProps } from '../../types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            active: boolean;
            editable: boolean;
            draggableItem: true;
            element: any;
            expandableItem: boolean;
            index: any;
        }): any;
        default?(_: {
            active: boolean;
            editable: boolean;
            element: import('../../types').VS2ListItemObject;
            draggableItem: false;
            expandableItem: boolean;
            index: number;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<VS2ListProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    dragStart: (oldIndex: number) => any;
    dragEnd: (value: {
        newIndex: number;
        oldIndex: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<VS2ListProps> & Readonly<{
    onDragStart?: ((oldIndex: number) => any) | undefined;
    onDragEnd?: ((value: {
        newIndex: number;
        oldIndex: number;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
