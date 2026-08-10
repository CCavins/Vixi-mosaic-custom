/**
 * CDN provider limitation.
 */
export declare const VID_MIN_PIXELS = 100;
/**
 * Types of assets supported.
 */
export declare const ASSET_TYPE: {
    image: string;
    video: string;
    audio: string;
    document: string;
    font: string;
};
/**
 * Props for Asset using components.
 */
export declare const ASSET_PROPS: {
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
};
/**
 * Props for CDN using components.
 */
export declare const CDN_IMG_OPTION_PROPS: {
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
};
