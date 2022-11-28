import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateTrustProductEvaluationServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateTrustProductEvaluationPathParams extends SpeakeasyBase {
    trustProductSid: string;
}
export declare class CreateTrustProductEvaluationCreateTrustProductEvaluationRequest extends SpeakeasyBase {
    policySid: string;
}
export declare class CreateTrustProductEvaluationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTrustProductEvaluationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateTrustProductEvaluationPathParams;
    request?: CreateTrustProductEvaluationCreateTrustProductEvaluationRequest;
    security: CreateTrustProductEvaluationSecurity;
}
export declare class CreateTrustProductEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1TrustProductTrustProductEvaluation?: shared.TrusthubV1TrustProductTrustProductEvaluation;
}
