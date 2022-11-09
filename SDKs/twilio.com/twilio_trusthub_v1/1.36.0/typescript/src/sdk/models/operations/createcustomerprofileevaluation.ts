import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECUSTOMERPROFILEEVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
];



export class CreateCustomerProfileEvaluationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=PolicySid;" })
  policySid: string;
}


export class CreateCustomerProfileEvaluationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCustomerProfileEvaluationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateCustomerProfileEvaluationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest;

  @Metadata()
  security: CreateCustomerProfileEvaluationSecurity;
}


export class CreateCustomerProfileEvaluationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1CustomerProfileCustomerProfileEvaluation?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation;
}
