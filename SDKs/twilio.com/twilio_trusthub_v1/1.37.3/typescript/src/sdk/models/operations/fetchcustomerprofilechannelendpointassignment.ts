import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchCustomerProfileChannelEndpointAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class FetchCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchCustomerProfileChannelEndpointAssignmentPathParams;

  @SpeakeasyMetadata()
  security: FetchCustomerProfileChannelEndpointAssignmentSecurity;
}


export class FetchCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
}
