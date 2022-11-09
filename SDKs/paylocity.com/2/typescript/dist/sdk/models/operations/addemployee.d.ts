import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddEmployeePathParams extends SpeakeasyBase {
    companyId: string;
}
export declare class AddEmployeeSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class AddEmployeeRequest extends SpeakeasyBase {
    pathParams: AddEmployeePathParams;
    request: shared.Employee;
    security: AddEmployeeSecurity;
}
export declare class AddEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    employeeIdResponses?: shared.EmployeeIdResponse[];
    errors?: shared.Error[];
}
