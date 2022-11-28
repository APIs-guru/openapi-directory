import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEmployeePathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class UpdateEmployeeSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class UpdateEmployeeRequest extends SpeakeasyBase {
    pathParams: UpdateEmployeePathParams;
    request: shared.Employee;
    security: UpdateEmployeeSecurity;
}
export declare class UpdateEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
