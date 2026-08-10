import { VS2ListItemProps } from '../../types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        dragHandle?(_: {
            disabled: boolean;
        }): any;
        left?(_: {}): any;
        default?(_: {}): any;
        right?(_: {}): any;
        hint?(_: {}): any;
        expanded?(_: {}): any;
    };
    refs: {
        'list-item': import('vue').CreateComponentPublicInstanceWithMixins<{
            replace: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            nav: boolean;
            style: import('vue').StyleValue;
            disabled: boolean;
            tag: string | import('vuetify/lib/util').JSXComponent;
            density: import('vuetify/lib/composables/density').Density;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
        } & {
            link?: boolean | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            title?: string | number | boolean | undefined;
            class?: any;
            theme?: string | undefined;
            to?: string | import('vue-router').RouteLocationAsRelativeGeneric | import('vue-router').RouteLocationAsPathGeneric | undefined;
            lines?: false | "one" | "two" | "three" | undefined;
            onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            prependIcon?: import('vuetify/lib/composables/icons').IconValue | undefined;
            appendIcon?: import('vuetify/lib/composables/icons').IconValue | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | number | boolean | undefined;
        } & {
            $children?: import('vue').VNodeChild | {
                $stable?: boolean;
            } | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | {
                prepend?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                append?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                default?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                title?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
                subtitle?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                append?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                default?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                title?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
                subtitle?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
        } & {
            onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        }, {
            activate: (activated: boolean, e?: Event) => void;
            isActivated: import('vue').ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import('vue').ComputedRef<boolean>;
            list: {
                filterable: import('vue').MaybeRefOrGetter<boolean>;
                hasPrepend: import('vue').Ref<boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event) => void;
            root: {
                children: import('vue').Ref<Map<unknown, unknown[]>>;
                parents: import('vue').Ref<Map<unknown, unknown>>;
                disabled: import('vue').Ref<Set<unknown>>;
                activatable: import('vue').Ref<boolean>;
                selectable: import('vue').Ref<boolean>;
                opened: import('vue').Ref<Set<unknown>>;
                activated: import('vue').Ref<Set<unknown>>;
                selected: import('vue').Ref<Map<unknown, "on" | "off" | "indeterminate">>;
                selectedValues: import('vue').Ref<unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event) => void;
                activate: (id: unknown, value: boolean, event?: Event) => void;
                select: (id: unknown, value: boolean, event?: Event) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import('vue').ComputedRef<{}>;
            link: import('vuetify/lib/composables/router').UseLink;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            click: (e: MouseEvent | KeyboardEvent) => true;
        }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
            replace: boolean;
            link: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            active: boolean;
            nav: boolean;
            style: import('vue').StyleValue;
            title: string | number | boolean;
            disabled: boolean;
            tag: string | import('vuetify/lib/util').JSXComponent;
            density: import('vuetify/lib/composables/density').Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
            subtitle: string | number | boolean;
        }, true, {}, import('vue').SlotsType<Partial<{
            prepend: (arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNode[];
            append: (arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNode[];
            default: (arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNode[];
            title: (arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNode[];
            subtitle: (arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNode[];
        }>>, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            replace: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            nav: boolean;
            style: import('vue').StyleValue;
            disabled: boolean;
            tag: string | import('vuetify/lib/util').JSXComponent;
            density: import('vuetify/lib/composables/density').Density;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
        } & {
            link?: boolean | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            title?: string | number | boolean | undefined;
            class?: any;
            theme?: string | undefined;
            to?: string | import('vue-router').RouteLocationAsRelativeGeneric | import('vue-router').RouteLocationAsPathGeneric | undefined;
            lines?: false | "one" | "two" | "three" | undefined;
            onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            prependIcon?: import('vuetify/lib/composables/icons').IconValue | undefined;
            appendIcon?: import('vuetify/lib/composables/icons').IconValue | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | number | boolean | undefined;
        } & {
            $children?: import('vue').VNodeChild | {
                $stable?: boolean;
            } | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | {
                prepend?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                append?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                default?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                title?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
                subtitle?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                append?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                default?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
                title?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
                subtitle?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
        } & {
            onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        }, {
            activate: (activated: boolean, e?: Event) => void;
            isActivated: import('vue').ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import('vue').ComputedRef<boolean>;
            list: {
                filterable: import('vue').MaybeRefOrGetter<boolean>;
                hasPrepend: import('vue').Ref<boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event) => void;
            root: {
                children: import('vue').Ref<Map<unknown, unknown[]>>;
                parents: import('vue').Ref<Map<unknown, unknown>>;
                disabled: import('vue').Ref<Set<unknown>>;
                activatable: import('vue').Ref<boolean>;
                selectable: import('vue').Ref<boolean>;
                opened: import('vue').Ref<Set<unknown>>;
                activated: import('vue').Ref<Set<unknown>>;
                selected: import('vue').Ref<Map<unknown, "on" | "off" | "indeterminate">>;
                selectedValues: import('vue').Ref<unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event) => void;
                activate: (id: unknown, value: boolean, event?: Event) => void;
                select: (id: unknown, value: boolean, event?: Event) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import('vue').ComputedRef<{}>;
            link: import('vuetify/lib/composables/router').UseLink;
        }, {}, {}, {}, {
            replace: boolean;
            link: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            active: boolean;
            nav: boolean;
            style: import('vue').StyleValue;
            title: string | number | boolean;
            disabled: boolean;
            tag: string | import('vuetify/lib/util').JSXComponent;
            density: import('vuetify/lib/composables/density').Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
            subtitle: string | number | boolean;
        }> | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<VS2ListItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    active: (active: boolean) => any;
    expanded: (expanded: boolean) => any;
}, string, import('vue').PublicProps, Readonly<VS2ListItemProps> & Readonly<{
    onActive?: ((active: boolean) => any) | undefined;
    onExpanded?: ((expanded: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    'list-item': import('vue').CreateComponentPublicInstanceWithMixins<{
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        nav: boolean;
        style: import('vue').StyleValue;
        disabled: boolean;
        tag: string | import('vuetify/lib/util').JSXComponent;
        density: import('vuetify/lib/composables/density').Density;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import('vue-router').RouteLocationAsRelativeGeneric | import('vue-router').RouteLocationAsPathGeneric | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: import('vuetify/lib/composables/icons').IconValue | undefined;
        appendIcon?: import('vuetify/lib/composables/icons').IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
    } & {
        $children?: import('vue').VNodeChild | {
            $stable?: boolean;
        } | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | {
            prepend?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            append?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            default?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            title?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
            subtitle?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            append?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            default?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            title?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
            subtitle?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    }, {
        activate: (activated: boolean, e?: Event) => void;
        isActivated: import('vue').ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import('vue').ComputedRef<boolean>;
        list: {
            filterable: import('vue').MaybeRefOrGetter<boolean>;
            hasPrepend: import('vue').Ref<boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event) => void;
        root: {
            children: import('vue').Ref<Map<unknown, unknown[]>>;
            parents: import('vue').Ref<Map<unknown, unknown>>;
            disabled: import('vue').Ref<Set<unknown>>;
            activatable: import('vue').Ref<boolean>;
            selectable: import('vue').Ref<boolean>;
            opened: import('vue').Ref<Set<unknown>>;
            activated: import('vue').Ref<Set<unknown>>;
            selected: import('vue').Ref<Map<unknown, "on" | "off" | "indeterminate">>;
            selectedValues: import('vue').Ref<unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event) => void;
            activate: (id: unknown, value: boolean, event?: Event) => void;
            select: (id: unknown, value: boolean, event?: Event) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import('vue').ComputedRef<{}>;
        link: import('vuetify/lib/composables/router').UseLink;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (e: MouseEvent | KeyboardEvent) => true;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        active: boolean;
        nav: boolean;
        style: import('vue').StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import('vuetify/lib/util').JSXComponent;
        density: import('vuetify/lib/composables/density').Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        subtitle: string | number | boolean;
    }, true, {}, import('vue').SlotsType<Partial<{
        prepend: (arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNode[];
        append: (arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNode[];
        default: (arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNode[];
        title: (arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNode[];
        subtitle: (arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNode[];
    }>>, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        nav: boolean;
        style: import('vue').StyleValue;
        disabled: boolean;
        tag: string | import('vuetify/lib/util').JSXComponent;
        density: import('vuetify/lib/composables/density').Density;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import('vue-router').RouteLocationAsRelativeGeneric | import('vue-router').RouteLocationAsPathGeneric | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: import('vuetify/lib/composables/icons').IconValue | undefined;
        appendIcon?: import('vuetify/lib/composables/icons').IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
    } & {
        $children?: import('vue').VNodeChild | {
            $stable?: boolean;
        } | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | {
            prepend?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            append?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            default?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            title?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
            subtitle?: ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            append?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            default?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
            title?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
            subtitle?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSlot) => import('vue').VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemTitleSlot) => import('vue').VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import('vuetify/lib/components/VList/VListItem').ListItemSubtitleSlot) => import('vue').VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    }, {
        activate: (activated: boolean, e?: Event) => void;
        isActivated: import('vue').ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import('vue').ComputedRef<boolean>;
        list: {
            filterable: import('vue').MaybeRefOrGetter<boolean>;
            hasPrepend: import('vue').Ref<boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event) => void;
        root: {
            children: import('vue').Ref<Map<unknown, unknown[]>>;
            parents: import('vue').Ref<Map<unknown, unknown>>;
            disabled: import('vue').Ref<Set<unknown>>;
            activatable: import('vue').Ref<boolean>;
            selectable: import('vue').Ref<boolean>;
            opened: import('vue').Ref<Set<unknown>>;
            activated: import('vue').Ref<Set<unknown>>;
            selected: import('vue').Ref<Map<unknown, "on" | "off" | "indeterminate">>;
            selectedValues: import('vue').Ref<unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event) => void;
            activate: (id: unknown, value: boolean, event?: Event) => void;
            select: (id: unknown, value: boolean, event?: Event) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import('vue').ComputedRef<{}>;
        link: import('vuetify/lib/composables/router').UseLink;
    }, {}, {}, {}, {
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        active: boolean;
        nav: boolean;
        style: import('vue').StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import('vuetify/lib/util').JSXComponent;
        density: import('vuetify/lib/composables/density').Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        subtitle: string | number | boolean;
    }> | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
