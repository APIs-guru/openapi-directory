import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceConversationMessageReceiptEnumDeliveryStatusEnum } from "./serviceconversationmessagereceiptenumdeliverystatusenum";
export declare class ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt extends SpeakeasyBase {
    accountSid?: string;
    channelMessageSid?: string;
    chatServiceSid?: string;
    conversationSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    errorCode?: number;
    messageSid?: string;
    participantSid?: string;
    sid?: string;
    status?: ServiceConversationMessageReceiptEnumDeliveryStatusEnum;
    url?: string;
}
