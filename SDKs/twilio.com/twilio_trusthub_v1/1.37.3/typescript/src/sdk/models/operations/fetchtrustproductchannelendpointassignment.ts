import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTrustProductChannelEndpointAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class FetchTrustProductChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class FetchTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchTrustProductChannelEndpointAssignmentPathParams;

  @SpeakeasyMetadata()
  security: FetchTrustProductChannelEndpointAssignmentSecurity;
}


export class FetchTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1TrustProductTrustProductChannelEndpointAssignment?: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment;
}
