import { SpeakeasyBase } from "../../../internal/utils";
import { ConversationMessageReceiptEnumDeliveryStatusEnum } from "./conversationmessagereceiptenumdeliverystatusenum";
export declare class ConversationsV1ConversationConversationMessageConversationMessageReceipt extends SpeakeasyBase {
    accountSid?: string;
    channelMessageSid?: string;
    conversationSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    errorCode?: number;
    messageSid?: string;
    participantSid?: string;
    sid?: string;
    status?: ConversationMessageReceiptEnumDeliveryStatusEnum;
    url?: string;
}
