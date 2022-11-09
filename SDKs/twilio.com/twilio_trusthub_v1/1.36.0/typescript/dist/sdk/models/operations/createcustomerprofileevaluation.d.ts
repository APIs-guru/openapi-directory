import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECUSTOMERPROFILEEVALUATION_SERVERS: string[];
export declare class CreateCustomerProfileEvaluationPathParams extends SpeakeasyBase {
    customerProfileSid: string;
}
export declare class CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest extends SpeakeasyBase {
    policySid: string;
}
export declare class CreateCustomerProfileEvaluationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCustomerProfileEvaluationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateCustomerProfileEvaluationPathParams;
    request?: CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest;
    security: CreateCustomerProfileEvaluationSecurity;
}
export declare class CreateCustomerProfileEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1CustomerProfileCustomerProfileEvaluation?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation;
}
