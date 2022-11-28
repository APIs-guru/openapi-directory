import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceParticipantConversationEnumStateEnum } from "./serviceparticipantconversationenumstateenum";



export class ConversationsV1ServiceServiceParticipantConversation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_attributes" })
  conversationAttributes?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_created_by" })
  conversationCreatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_date_created" })
  conversationDateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=conversation_date_updated" })
  conversationDateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=conversation_friendly_name" })
  conversationFriendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_sid" })
  conversationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_state" })
  conversationState?: ServiceParticipantConversationEnumStateEnum;

  @SpeakeasyMetadata({ data: "json, name=conversation_timers" })
  conversationTimers?: any;

  @SpeakeasyMetadata({ data: "json, name=conversation_unique_name" })
  conversationUniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=participant_identity" })
  participantIdentity?: string;

  @SpeakeasyMetadata({ data: "json, name=participant_messaging_binding" })
  participantMessagingBinding?: any;

  @SpeakeasyMetadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=participant_user_sid" })
  participantUserSid?: string;
}
