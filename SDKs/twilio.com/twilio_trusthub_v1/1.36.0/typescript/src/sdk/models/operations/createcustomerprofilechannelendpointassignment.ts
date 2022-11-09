import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECUSTOMERPROFILECHANNELENDPOINTASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class CreateCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ChannelEndpointSid;" })
  channelEndpointSid: string;

  @Metadata({ data: "form, name=ChannelEndpointType;" })
  channelEndpointType: string;
}


export class CreateCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateCustomerProfileChannelEndpointAssignmentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest;

  @Metadata()
  security: CreateCustomerProfileChannelEndpointAssignmentSecurity;
}


export class CreateCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
}
