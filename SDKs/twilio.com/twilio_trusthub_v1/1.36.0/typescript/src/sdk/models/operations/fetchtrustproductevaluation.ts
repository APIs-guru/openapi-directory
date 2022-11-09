import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTRUSTPRODUCTEVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
];



export class FetchTrustProductEvaluationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class FetchTrustProductEvaluationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustProductEvaluationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchTrustProductEvaluationPathParams;

  @Metadata()
  security: FetchTrustProductEvaluationSecurity;
}


export class FetchTrustProductEvaluationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1TrustProductTrustProductEvaluation?: shared.TrusthubV1TrustProductTrustProductEvaluation;
}
