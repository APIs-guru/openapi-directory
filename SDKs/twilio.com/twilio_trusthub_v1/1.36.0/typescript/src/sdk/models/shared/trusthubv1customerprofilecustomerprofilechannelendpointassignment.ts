import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=channel_endpoint_sid" })
  channelEndpointSid?: string;

  @Metadata({ data: "json, name=channel_endpoint_type" })
  channelEndpointType?: string;

  @Metadata({ data: "json, name=customer_profile_sid" })
  customerProfileSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
