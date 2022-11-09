import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConversationsV1ServiceServiceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @Metadata({ data: "json, name=default_chat_service_role_sid" })
  defaultChatServiceRoleSid?: string;

  @Metadata({ data: "json, name=default_conversation_creator_role_sid" })
  defaultConversationCreatorRoleSid?: string;

  @Metadata({ data: "json, name=default_conversation_role_sid" })
  defaultConversationRoleSid?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=reachability_enabled" })
  reachabilityEnabled?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
