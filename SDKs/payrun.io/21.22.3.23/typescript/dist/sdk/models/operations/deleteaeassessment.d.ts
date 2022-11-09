import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteAeAssessmentPathParams extends SpeakeasyBase {
    aeAssessmentId: string;
    employeeId: string;
    employerId: string;
}
export declare class DeleteAeAssessmentHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteAeAssessmentRequest extends SpeakeasyBase {
    pathParams: DeleteAeAssessmentPathParams;
    headers: DeleteAeAssessmentHeaders;
}
export declare class DeleteAeAssessmentResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
