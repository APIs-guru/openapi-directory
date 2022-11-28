import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConversationsV1ServiceServiceConversationServiceConversationParticipant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_sid" })
  conversationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=last_read_message_index" })
  lastReadMessageIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=last_read_timestamp" })
  lastReadTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=messaging_binding" })
  messagingBinding?: any;

  @SpeakeasyMetadata({ data: "json, name=role_sid" })
  roleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
