import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTrustProductEvaluationServerList = [
	"https://trusthub.twilio.com",
] as const;


export class FetchTrustProductEvaluationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class FetchTrustProductEvaluationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustProductEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchTrustProductEvaluationPathParams;

  @SpeakeasyMetadata()
  security: FetchTrustProductEvaluationSecurity;
}


export class FetchTrustProductEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1TrustProductTrustProductEvaluation?: shared.TrusthubV1TrustProductTrustProductEvaluation;
}
