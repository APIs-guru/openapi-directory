import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCustomerProfileEvaluationServerList = [
	"https://trusthub.twilio.com",
] as const;


export class CreateCustomerProfileEvaluationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=PolicySid;" })
  policySid: string;
}


export class CreateCustomerProfileEvaluationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCustomerProfileEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateCustomerProfileEvaluationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest;

  @SpeakeasyMetadata()
  security: CreateCustomerProfileEvaluationSecurity;
}


export class CreateCustomerProfileEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1CustomerProfileCustomerProfileEvaluation?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation;
}
