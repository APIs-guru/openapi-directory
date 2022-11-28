import { SpeakeasyBase } from "../../../internal/utils";
import { UserConversationEnumStateEnum } from "./userconversationenumstateenum";
import { UserConversationEnumNotificationLevelEnum } from "./userconversationenumnotificationlevelenum";
export declare class ConversationsV1UserUserConversation extends SpeakeasyBase {
    accountSid?: string;
    attributes?: string;
    chatServiceSid?: string;
    conversationSid?: string;
    conversationState?: UserConversationEnumStateEnum;
    createdBy?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    lastReadMessageIndex?: number;
    links?: Map<string, any>;
    notificationLevel?: UserConversationEnumNotificationLevelEnum;
    participantSid?: string;
    timers?: any;
    uniqueName?: string;
    unreadMessagesCount?: number;
    url?: string;
    userSid?: string;
}
