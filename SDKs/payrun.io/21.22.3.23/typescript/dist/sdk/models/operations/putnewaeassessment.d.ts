import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutNewAeAssessmentPathParams extends SpeakeasyBase {
    aeAssessmentId: string;
    employeeId: string;
    employerId: string;
}
export declare class PutNewAeAssessmentHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutNewAeAssessmentRequest extends SpeakeasyBase {
    pathParams: PutNewAeAssessmentPathParams;
    headers: PutNewAeAssessmentHeaders;
    request: shared.AeAssessment;
}
export declare class PutNewAeAssessmentResponse extends SpeakeasyBase {
    aeAssessment?: shared.AeAssessment;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
