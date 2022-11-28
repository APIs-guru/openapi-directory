import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=channel_endpoint_sid" })
  channelEndpointSid?: string;

  @SpeakeasyMetadata({ data: "json, name=channel_endpoint_type" })
  channelEndpointType?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_profile_sid" })
  customerProfileSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
