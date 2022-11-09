import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrusthubV1TrustProductTrustProductChannelEndpointAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=channel_endpoint_sid" })
  channelEndpointSid?: string;

  @Metadata({ data: "json, name=channel_endpoint_type" })
  channelEndpointType?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=trust_product_sid" })
  trustProductSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
