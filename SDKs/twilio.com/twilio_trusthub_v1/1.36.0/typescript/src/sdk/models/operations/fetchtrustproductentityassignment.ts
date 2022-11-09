import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTRUSTPRODUCTENTITYASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class FetchTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class FetchTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustProductEntityAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchTrustProductEntityAssignmentPathParams;

  @Metadata()
  security: FetchTrustProductEntityAssignmentSecurity;
}


export class FetchTrustProductEntityAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1TrustProductTrustProductEntityAssignment?: shared.TrusthubV1TrustProductTrustProductEntityAssignment;
}
