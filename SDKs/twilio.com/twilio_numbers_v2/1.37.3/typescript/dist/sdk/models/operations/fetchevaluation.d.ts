import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchEvaluationServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchEvaluationPathParams extends SpeakeasyBase {
    bundleSid: string;
    sid: string;
}
export declare class FetchEvaluationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEvaluationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEvaluationPathParams;
    security: FetchEvaluationSecurity;
}
export declare class FetchEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceBundleEvaluation?: shared.NumbersV2RegulatoryComplianceBundleEvaluation;
}
