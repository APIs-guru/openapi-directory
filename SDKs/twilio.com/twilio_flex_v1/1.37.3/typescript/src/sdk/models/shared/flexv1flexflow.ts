import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlexFlowEnumChannelTypeEnum } from "./flexflowenumchanneltypeenum";
import { FlexFlowEnumIntegrationTypeEnum } from "./flexflowenumintegrationtypeenum";



export class FlexV1FlexFlow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=channel_type" })
  channelType?: FlexFlowEnumChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_identity" })
  contactIdentity?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=integration" })
  integration?: any;

  @SpeakeasyMetadata({ data: "json, name=integration_type" })
  integrationType?: FlexFlowEnumIntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=janitor_enabled" })
  janitorEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=long_lived" })
  longLived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
