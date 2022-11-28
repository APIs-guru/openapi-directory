import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEmployeeIntoEmployerPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class PutEmployeeIntoEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutEmployeeIntoEmployerRequest extends SpeakeasyBase {
    pathParams: PutEmployeeIntoEmployerPathParams;
    headers: PutEmployeeIntoEmployerHeaders;
    request: shared.Employee;
}
export declare class PutEmployeeIntoEmployerResponse extends SpeakeasyBase {
    contentType: string;
    employee?: shared.Employee;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
