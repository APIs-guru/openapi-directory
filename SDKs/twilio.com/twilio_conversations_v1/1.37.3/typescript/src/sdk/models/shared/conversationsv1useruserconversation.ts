import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserConversationEnumStateEnum } from "./userconversationenumstateenum";
import { UserConversationEnumNotificationLevelEnum } from "./userconversationenumnotificationlevelenum";



export class ConversationsV1UserUserConversation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_sid" })
  conversationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_state" })
  conversationState?: UserConversationEnumStateEnum;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_read_message_index" })
  lastReadMessageIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=notification_level" })
  notificationLevel?: UserConversationEnumNotificationLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=timers" })
  timers?: any;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=unread_messages_count" })
  unreadMessagesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user_sid" })
  userSid?: string;
}
