import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserChannelEnumChannelStatusEnum } from "./userchannelenumchannelstatusenum";



export class ChatV1ServiceUserUserChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=channel_sid" })
  channelSid?: string;

  @SpeakeasyMetadata({ data: "json, name=last_consumed_message_index" })
  lastConsumedMessageIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=member_sid" })
  memberSid?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UserChannelEnumChannelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=unread_messages_count" })
  unreadMessagesCount?: number;
}
