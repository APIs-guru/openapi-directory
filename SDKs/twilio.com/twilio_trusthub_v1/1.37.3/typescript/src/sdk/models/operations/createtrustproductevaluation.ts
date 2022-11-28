import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTrustProductEvaluationServerList = [
	"https://trusthub.twilio.com",
] as const;


export class CreateTrustProductEvaluationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class CreateTrustProductEvaluationCreateTrustProductEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=PolicySid;" })
  policySid: string;
}


export class CreateTrustProductEvaluationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrustProductEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateTrustProductEvaluationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrustProductEvaluationCreateTrustProductEvaluationRequest;

  @SpeakeasyMetadata()
  security: CreateTrustProductEvaluationSecurity;
}


export class CreateTrustProductEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1TrustProductTrustProductEvaluation?: shared.TrusthubV1TrustProductTrustProductEvaluation;
}
