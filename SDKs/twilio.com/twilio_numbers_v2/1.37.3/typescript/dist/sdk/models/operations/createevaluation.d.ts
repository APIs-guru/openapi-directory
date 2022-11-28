import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateEvaluationServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateEvaluationPathParams extends SpeakeasyBase {
    bundleSid: string;
}
export declare class CreateEvaluationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateEvaluationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateEvaluationPathParams;
    security: CreateEvaluationSecurity;
}
export declare class CreateEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceBundleEvaluation?: shared.NumbersV2RegulatoryComplianceBundleEvaluation;
}
