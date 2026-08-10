import { DefaultLocaleMessageSchema, LocaleMessages } from 'vue-i18n';
export type VS2LocaleMessages = LocaleMessages<DefaultLocaleMessageSchema>;
export declare class VS2I18n {
    constructor(messages: VS2LocaleMessages);
    i18n: import('vue-i18n').I18n<VS2LocaleMessages, {}, {}, string, false>;
}
