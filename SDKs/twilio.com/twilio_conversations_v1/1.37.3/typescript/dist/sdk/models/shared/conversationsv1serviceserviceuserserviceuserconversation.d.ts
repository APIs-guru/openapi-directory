import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUserConversationEnumStateEnum } from "./serviceuserconversationenumstateenum";
import { ServiceUserConversationEnumNotificationLevelEnum } from "./serviceuserconversationenumnotificationlevelenum";
export declare class ConversationsV1ServiceServiceUserServiceUserConversation extends SpeakeasyBase {
    accountSid?: string;
    attributes?: string;
    chatServiceSid?: string;
    conversationSid?: string;
    conversationState?: ServiceUserConversationEnumStateEnum;
    createdBy?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    lastReadMessageIndex?: number;
    links?: Map<string, any>;
    notificationLevel?: ServiceUserConversationEnumNotificationLevelEnum;
    participantSid?: string;
    timers?: any;
    uniqueName?: string;
    unreadMessagesCount?: number;
    url?: string;
    userSid?: string;
}
