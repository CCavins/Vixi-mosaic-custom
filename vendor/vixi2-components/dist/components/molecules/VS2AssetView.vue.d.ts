import { PropType } from 'vue';
import { AssetType } from '../../types';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    func: {
        type: StringConstructor;
        required: boolean;
    };
    trim: {
        type: NumberConstructor;
        required: boolean;
    };
    faceMargin: {
        type: NumberConstructor;
        required: boolean;
    };
    gravity: {
        type: StringConstructor;
        required: boolean;
    };
    otherCdn: {
        type: StringConstructor;
        required: boolean;
    };
    src: {
        type: StringConstructor;
        required: boolean;
    };
    alt: {
        type: StringConstructor;
        required: boolean;
    };
    error_src: {
        type: StringConstructor;
        required: boolean;
    };
    height: {
        type: StringConstructor;
        required: boolean;
    };
    minHeight: {
        type: StringConstructor;
        required: boolean;
    };
    maxHeight: {
        type: StringConstructor;
        required: boolean;
    };
    width: {
        type: StringConstructor;
        required: boolean;
    };
    minWidth: {
        type: StringConstructor;
        required: boolean;
    };
    maxWidth: {
        type: StringConstructor;
        required: boolean;
    };
    borderRadius: {
        type: StringConstructor;
        required: boolean;
    };
    aspectRatio: {
        type: StringConstructor;
        required: boolean;
    };
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    transition: {
        type: StringConstructor;
        required: boolean;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    muted: {
        type: BooleanConstructor;
        default: boolean;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    isUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<AssetType>;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    func: {
        type: StringConstructor;
        required: boolean;
    };
    trim: {
        type: NumberConstructor;
        required: boolean;
    };
    faceMargin: {
        type: NumberConstructor;
        required: boolean;
    };
    gravity: {
        type: StringConstructor;
        required: boolean;
    };
    otherCdn: {
        type: StringConstructor;
        required: boolean;
    };
    src: {
        type: StringConstructor;
        required: boolean;
    };
    alt: {
        type: StringConstructor;
        required: boolean;
    };
    error_src: {
        type: StringConstructor;
        required: boolean;
    };
    height: {
        type: StringConstructor;
        required: boolean;
    };
    minHeight: {
        type: StringConstructor;
        required: boolean;
    };
    maxHeight: {
        type: StringConstructor;
        required: boolean;
    };
    width: {
        type: StringConstructor;
        required: boolean;
    };
    minWidth: {
        type: StringConstructor;
        required: boolean;
    };
    maxWidth: {
        type: StringConstructor;
        required: boolean;
    };
    borderRadius: {
        type: StringConstructor;
        required: boolean;
    };
    aspectRatio: {
        type: StringConstructor;
        required: boolean;
    };
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    transition: {
        type: StringConstructor;
        required: boolean;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    muted: {
        type: BooleanConstructor;
        default: boolean;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    isUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<AssetType>;
        required: true;
    };
}>> & Readonly<{}>, {
    muted: boolean;
    loop: boolean;
    threshold: number;
    autoplay: boolean;
    controls: boolean;
    isUpload: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    assettool: HTMLDivElement;
    audioref: HTMLAudioElement;
}, any>;
export default _default;
