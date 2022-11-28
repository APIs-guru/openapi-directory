import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceConversationEnumStateEnum } from "./serviceconversationenumstateenum";
export declare class ConversationsV1ServiceServiceConversation extends SpeakeasyBase {
    accountSid?: string;
    attributes?: string;
    bindings?: any;
    chatServiceSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    links?: Map<string, any>;
    messagingServiceSid?: string;
    sid?: string;
    state?: ServiceConversationEnumStateEnum;
    timers?: any;
    uniqueName?: string;
    url?: string;
}
