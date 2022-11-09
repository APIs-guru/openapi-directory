import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConversationsV1ServiceServiceConfigurationServiceNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=added_to_conversation" })
  addedToConversation?: any;

  @Metadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @Metadata({ data: "json, name=log_enabled" })
  logEnabled?: boolean;

  @Metadata({ data: "json, name=new_message" })
  newMessage?: any;

  @Metadata({ data: "json, name=removed_from_conversation" })
  removedFromConversation?: any;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
