import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConversationMessageReceiptEnumDeliveryStatusEnum } from "./conversationmessagereceiptenumdeliverystatusenum";



export class ConversationsV1ConversationConversationMessageConversationMessageReceipt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=channel_message_sid" })
  channelMessageSid?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_sid" })
  conversationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=message_sid" })
  messageSid?: string;

  @SpeakeasyMetadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConversationMessageReceiptEnumDeliveryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
