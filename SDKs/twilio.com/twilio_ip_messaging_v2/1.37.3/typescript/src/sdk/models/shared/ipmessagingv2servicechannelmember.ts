import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpMessagingV2ServiceChannelMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "json, name=channel_sid" })
  channelSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=last_consumed_message_index" })
  lastConsumedMessageIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=last_consumption_timestamp" })
  lastConsumptionTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=role_sid" })
  roleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
