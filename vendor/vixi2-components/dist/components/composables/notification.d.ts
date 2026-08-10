import { VS2IconEnum } from '../../enums';
export type NotificationObject = {
    message: string;
    icon: VS2IconEnum;
    type: 'error' | 'info' | 'success' | 'warn';
    ID: string;
};
export type NotificationState = {
    notificationQueue: NotificationObject[];
    currentNotifications: NotificationObject[];
};
export declare const useNotifications: import('pinia').StoreDefinition<"notifications", NotificationState, {
    queueSize: (state: NotificationState) => number;
    currentSize: (state: NotificationState) => number;
}, {
    close(index: number): void;
    closeOldest(): void;
    error(message: string, errorObj?: Error): void;
    info(message: string): void;
    process(): void;
    queue(notification: NotificationObject): void;
    success(message: string): void;
    warn(message: string, errorObj?: Error): void;
}>;
