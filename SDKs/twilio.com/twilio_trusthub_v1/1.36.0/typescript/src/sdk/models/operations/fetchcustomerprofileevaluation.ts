import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHCUSTOMERPROFILEEVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
];



export class FetchCustomerProfileEvaluationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchCustomerProfileEvaluationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchCustomerProfileEvaluationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchCustomerProfileEvaluationPathParams;

  @Metadata()
  security: FetchCustomerProfileEvaluationSecurity;
}


export class FetchCustomerProfileEvaluationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1CustomerProfileCustomerProfileEvaluation?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation;
}
