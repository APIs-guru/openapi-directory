import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETECUSTOMERPROFILECHANNELENDPOINTASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class DeleteCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteCustomerProfileChannelEndpointAssignmentPathParams;

  @Metadata()
  security: DeleteCustomerProfileChannelEndpointAssignmentSecurity;
}


export class DeleteCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
