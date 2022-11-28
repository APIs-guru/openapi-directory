import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchCustomerProfileEvaluationServerList = [
	"https://trusthub.twilio.com",
] as const;


export class FetchCustomerProfileEvaluationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchCustomerProfileEvaluationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchCustomerProfileEvaluationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchCustomerProfileEvaluationPathParams;

  @SpeakeasyMetadata()
  security: FetchCustomerProfileEvaluationSecurity;
}


export class FetchCustomerProfileEvaluationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1CustomerProfileCustomerProfileEvaluation?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation;
}
