import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConversationsV1ServiceServiceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=default_chat_service_role_sid" })
  defaultChatServiceRoleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=default_conversation_creator_role_sid" })
  defaultConversationCreatorRoleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=default_conversation_role_sid" })
  defaultConversationRoleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=reachability_enabled" })
  reachabilityEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
