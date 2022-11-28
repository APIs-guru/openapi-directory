import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConversationsV1ServiceServiceConfigurationServiceNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=added_to_conversation" })
  addedToConversation?: any;

  @SpeakeasyMetadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=log_enabled" })
  logEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=new_message" })
  newMessage?: any;

  @SpeakeasyMetadata({ data: "json, name=removed_from_conversation" })
  removedFromConversation?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
