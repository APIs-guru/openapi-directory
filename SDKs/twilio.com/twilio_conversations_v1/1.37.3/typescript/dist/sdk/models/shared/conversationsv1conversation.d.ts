import { SpeakeasyBase } from "../../../internal/utils";
import { ConversationEnumStateEnum } from "./conversationenumstateenum";
export declare class ConversationsV1Conversation extends SpeakeasyBase {
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
    state?: ConversationEnumStateEnum;
    timers?: any;
    uniqueName?: string;
    url?: string;
}
