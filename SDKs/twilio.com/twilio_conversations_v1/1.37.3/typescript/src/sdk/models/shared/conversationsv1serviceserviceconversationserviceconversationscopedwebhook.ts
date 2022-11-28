import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: any;

  @SpeakeasyMetadata({ data: "json, name=conversation_sid" })
  conversationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
