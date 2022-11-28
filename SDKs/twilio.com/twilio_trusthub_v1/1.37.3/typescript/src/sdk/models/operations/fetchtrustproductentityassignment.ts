import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTrustProductEntityAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class FetchTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class FetchTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustProductEntityAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchTrustProductEntityAssignmentPathParams;

  @SpeakeasyMetadata()
  security: FetchTrustProductEntityAssignmentSecurity;
}


export class FetchTrustProductEntityAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1TrustProductTrustProductEntityAssignment?: shared.TrusthubV1TrustProductTrustProductEntityAssignment;
}
