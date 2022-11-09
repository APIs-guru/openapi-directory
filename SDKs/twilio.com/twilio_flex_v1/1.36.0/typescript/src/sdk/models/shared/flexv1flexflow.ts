import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlexFlowEnumChannelTypeEnum } from "./flexflowenumchanneltypeenum";
import { FlexFlowEnumIntegrationTypeEnum } from "./flexflowenumintegrationtypeenum";


export class FlexV1FlexFlow extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=channel_type" })
  channelType?: FlexFlowEnumChannelTypeEnum;

  @Metadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @Metadata({ data: "json, name=contact_identity" })
  contactIdentity?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=integration" })
  integration?: any;

  @Metadata({ data: "json, name=integration_type" })
  integrationType?: FlexFlowEnumIntegrationTypeEnum;

  @Metadata({ data: "json, name=janitor_enabled" })
  janitorEnabled?: boolean;

  @Metadata({ data: "json, name=long_lived" })
  longLived?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
