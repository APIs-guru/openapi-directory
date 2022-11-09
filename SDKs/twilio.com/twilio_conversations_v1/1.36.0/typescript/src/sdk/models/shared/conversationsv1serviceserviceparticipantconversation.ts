import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceParticipantConversationEnumStateEnum } from "./serviceparticipantconversationenumstateenum";


export class ConversationsV1ServiceServiceParticipantConversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @Metadata({ data: "json, name=conversation_attributes" })
  conversationAttributes?: string;

  @Metadata({ data: "json, name=conversation_created_by" })
  conversationCreatedBy?: string;

  @Metadata({ data: "json, name=conversation_date_created" })
  conversationDateCreated?: Date;

  @Metadata({ data: "json, name=conversation_date_updated" })
  conversationDateUpdated?: Date;

  @Metadata({ data: "json, name=conversation_friendly_name" })
  conversationFriendlyName?: string;

  @Metadata({ data: "json, name=conversation_sid" })
  conversationSid?: string;

  @Metadata({ data: "json, name=conversation_state" })
  conversationState?: ServiceParticipantConversationEnumStateEnum;

  @Metadata({ data: "json, name=conversation_timers" })
  conversationTimers?: any;

  @Metadata({ data: "json, name=conversation_unique_name" })
  conversationUniqueName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=participant_identity" })
  participantIdentity?: string;

  @Metadata({ data: "json, name=participant_messaging_binding" })
  participantMessagingBinding?: any;

  @Metadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @Metadata({ data: "json, name=participant_user_sid" })
  participantUserSid?: string;
}
