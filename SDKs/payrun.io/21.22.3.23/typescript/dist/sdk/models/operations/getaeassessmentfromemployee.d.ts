import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAeAssessmentFromEmployeePathParams extends SpeakeasyBase {
    aeAssessmentId: string;
    employeeId: string;
    employerId: string;
}
export declare class GetAeAssessmentFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAeAssessmentFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetAeAssessmentFromEmployeePathParams;
    headers: GetAeAssessmentFromEmployeeHeaders;
}
export declare class GetAeAssessmentFromEmployeeResponse extends SpeakeasyBase {
    aeAssessment?: shared.AeAssessment;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
