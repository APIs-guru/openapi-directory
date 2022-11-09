import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAeAssessmentsFromEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetAeAssessmentsFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAeAssessmentsFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetAeAssessmentsFromEmployeePathParams;
    headers: GetAeAssessmentsFromEmployeeHeaders;
}
export declare class GetAeAssessmentsFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
