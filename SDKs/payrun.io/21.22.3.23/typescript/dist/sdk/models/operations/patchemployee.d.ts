import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class PatchEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchEmployeeRequest extends SpeakeasyBase {
    pathParams: PatchEmployeePathParams;
    headers: PatchEmployeeHeaders;
    request: shared.Employee;
}
export declare class PatchEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    employee?: shared.Employee;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
