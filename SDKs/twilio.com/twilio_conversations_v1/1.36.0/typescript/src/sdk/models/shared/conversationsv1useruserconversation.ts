import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserConversationEnumStateEnum } from "./userconversationenumstateenum";
import { UserConversationEnumNotificationLevelEnum } from "./userconversationenumnotificationlevelenum";


export class ConversationsV1UserUserConversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: string;

  @Metadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @Metadata({ data: "json, name=conversation_sid" })
  conversationSid?: string;

  @Metadata({ data: "json, name=conversation_state" })
  conversationState?: UserConversationEnumStateEnum;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=last_read_message_index" })
  lastReadMessageIndex?: number;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=notification_level" })
  notificationLevel?: UserConversationEnumNotificationLevelEnum;

  @Metadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @Metadata({ data: "json, name=timers" })
  timers?: any;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=unread_messages_count" })
  unreadMessagesCount?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user_sid" })
  userSid?: string;
}
