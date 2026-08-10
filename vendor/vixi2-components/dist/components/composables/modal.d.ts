import { ValidationRule, VS2ButtonVariant } from '../../types';
export type ModalAction = {
    label: string;
    type: VS2ButtonVariant;
    block: boolean;
    isSubmit: boolean;
    class?: string;
    callback: (props?: unknown) => void;
};
export type ModalView = {
    component: object;
    props: object;
};
export type ModalsState = {
    isOpen: boolean;
    isModalLoading: boolean;
    view: ModalView;
    modalWidth: number;
    closable: boolean;
    actions?: ModalAction[];
};
export declare const useModal: import('pinia').StoreDefinition<"modal", ModalsState, {}, {
    close(): void;
    setModalLoading(loading: boolean): void;
    clear(): void;
    open(view: ModalView, actions?: ModalAction[], closable?: boolean): void;
    openDelete(deleteCallback: () => Promise<void>, title: string, subtitle: string, buttonLabel?: string, cancelLabel?: string): void;
    openInput(inputCallback: (value: unknown) => Promise<void>, title: string, subtitle: string, initialText?: string, rules?: ValidationRule[], hint?: string, placeholder?: string, buttonLabel?: string): void;
    openWarning(proceedCallback: () => Promise<void>, title: string, subtitle: string, closable?: boolean): void;
}>;
