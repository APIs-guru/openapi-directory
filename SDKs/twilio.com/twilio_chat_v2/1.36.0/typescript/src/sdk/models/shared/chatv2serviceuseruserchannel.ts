import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserChannelEnumNotificationLevelEnum } from "./userchannelenumnotificationlevelenum";
import { UserChannelEnumChannelStatusEnum } from "./userchannelenumchannelstatusenum";


export class ChatV2ServiceUserUserChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=channel_sid" })
  channelSid?: string;

  @Metadata({ data: "json, name=last_consumed_message_index" })
  lastConsumedMessageIndex?: number;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=member_sid" })
  memberSid?: string;

  @Metadata({ data: "json, name=notification_level" })
  notificationLevel?: UserChannelEnumNotificationLevelEnum;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: UserChannelEnumChannelStatusEnum;

  @Metadata({ data: "json, name=unread_messages_count" })
  unreadMessagesCount?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user_sid" })
  userSid?: string;
}
