import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCustomerProfileChannelEndpointAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class CreateCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ChannelEndpointSid;" })
  channelEndpointSid: string;

  @SpeakeasyMetadata({ data: "form, name=ChannelEndpointType;" })
  channelEndpointType: string;
}


export class CreateCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateCustomerProfileChannelEndpointAssignmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest;

  @SpeakeasyMetadata()
  security: CreateCustomerProfileChannelEndpointAssignmentSecurity;
}


export class CreateCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
}
