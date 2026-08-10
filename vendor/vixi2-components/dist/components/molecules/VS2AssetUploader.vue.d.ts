import { PropType } from 'vue';
import { VoidResolve, VoidReject, AssetType } from '../../types';
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
    sizeLimitMB: {
        type: NumberConstructor;
        required: false;
    };
    types: {
        type: {
            (arrayLength: number): string[];
            (...items: string[]): string[];
            new (arrayLength: number): string[];
            new (...items: string[]): string[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
            fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
    };
    assetType: {
        type: PropType<AssetType>;
        required: false;
    };
    skipFileTypeCheck: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    acceptedExtensions: {
        type: {
            (arrayLength: number): string[];
            (...items: string[]): string[];
            new (arrayLength: number): string[];
            new (...items: string[]): string[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
            fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
        default: never[];
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:asset": (resolve: VoidResolve, reject: VoidReject, file: File | null, mimeType: string) => any;
    "update:clear": (resolve: VoidResolve, reject: VoidReject, src: string | null) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
    sizeLimitMB: {
        type: NumberConstructor;
        required: false;
    };
    types: {
        type: {
            (arrayLength: number): string[];
            (...items: string[]): string[];
            new (arrayLength: number): string[];
            new (...items: string[]): string[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
            fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
    };
    assetType: {
        type: PropType<AssetType>;
        required: false;
    };
    skipFileTypeCheck: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    acceptedExtensions: {
        type: {
            (arrayLength: number): string[];
            (...items: string[]): string[];
            new (arrayLength: number): string[];
            new (...items: string[]): string[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
            fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
        default: never[];
    };
}>> & Readonly<{
    "onUpdate:asset"?: ((resolve: VoidResolve, reject: VoidReject, file: File | null, mimeType: string) => any) | undefined;
    "onUpdate:clear"?: ((resolve: VoidResolve, reject: VoidReject, src: string | null) => any) | undefined;
}>, {
    muted: boolean;
    loop: boolean;
    threshold: number;
    autoplay: boolean;
    controls: boolean;
    isUpload: boolean;
    skipFileTypeCheck: boolean;
    acceptedExtensions: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
