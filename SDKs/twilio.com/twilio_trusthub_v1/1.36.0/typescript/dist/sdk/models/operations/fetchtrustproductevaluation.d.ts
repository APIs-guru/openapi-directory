import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTRUSTPRODUCTEVALUATION_SERVERS: string[];
export declare class FetchTrustProductEvaluationPathParams extends SpeakeasyBase {
    sid: string;
    trustProductSid: string;
}
export declare class FetchTrustProductEvaluationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrustProductEvaluationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTrustProductEvaluationPathParams;
    security: FetchTrustProductEvaluationSecurity;
}
export declare class FetchTrustProductEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1TrustProductTrustProductEvaluation?: shared.TrusthubV1TrustProductTrustProductEvaluation;
}
