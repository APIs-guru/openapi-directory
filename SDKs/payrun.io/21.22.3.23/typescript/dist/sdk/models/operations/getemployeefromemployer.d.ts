import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployeeFromEmployerPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetEmployeeFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeeFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetEmployeeFromEmployerPathParams;
    headers: GetEmployeeFromEmployerHeaders;
}
export declare class GetEmployeeFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    employee?: shared.Employee;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
