import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETRUSTPRODUCTEVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
];



export class CreateTrustProductEvaluationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class CreateTrustProductEvaluationCreateTrustProductEvaluationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=PolicySid;" })
  policySid: string;
}


export class CreateTrustProductEvaluationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrustProductEvaluationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateTrustProductEvaluationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrustProductEvaluationCreateTrustProductEvaluationRequest;

  @Metadata()
  security: CreateTrustProductEvaluationSecurity;
}


export class CreateTrustProductEvaluationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1TrustProductTrustProductEvaluation?: shared.TrusthubV1TrustProductTrustProductEvaluation;
}
