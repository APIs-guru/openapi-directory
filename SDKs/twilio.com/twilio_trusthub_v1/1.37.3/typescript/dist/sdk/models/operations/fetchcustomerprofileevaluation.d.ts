import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCustomerProfileEvaluationServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchCustomerProfileEvaluationPathParams extends SpeakeasyBase {
    customerProfileSid: string;
    sid: string;
}
export declare class FetchCustomerProfileEvaluationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCustomerProfileEvaluationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCustomerProfileEvaluationPathParams;
    security: FetchCustomerProfileEvaluationSecurity;
}
export declare class FetchCustomerProfileEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1CustomerProfileCustomerProfileEvaluation?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation;
}
