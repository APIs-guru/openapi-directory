import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpMessagingV1ServiceChannelMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=channel_sid" })
  channelSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=last_consumed_message_index" })
  lastConsumedMessageIndex?: number;

  @Metadata({ data: "json, name=last_consumption_timestamp" })
  lastConsumptionTimestamp?: Date;

  @Metadata({ data: "json, name=role_sid" })
  roleSid?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
