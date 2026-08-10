import { VS2IconProps, VS2ModalProps, VS2ValidationEmitValue } from '../../types';
type __VLS_Props = VS2IconProps & VS2ModalProps;
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    "update:isValid": (value: VS2ValidationEmitValue) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onUpdate:isValid"?: ((value: VS2ValidationEmitValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
