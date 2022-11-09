import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConversationMessageReceiptEnumDeliveryStatusEnum } from "./conversationmessagereceiptenumdeliverystatusenum";


export class ConversationsV1ConversationConversationMessageConversationMessageReceipt extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=channel_message_sid" })
  channelMessageSid?: string;

  @Metadata({ data: "json, name=conversation_sid" })
  conversationSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=error_code" })
  errorCode?: number;

  @Metadata({ data: "json, name=message_sid" })
  messageSid?: string;

  @Metadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: ConversationMessageReceiptEnumDeliveryStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
