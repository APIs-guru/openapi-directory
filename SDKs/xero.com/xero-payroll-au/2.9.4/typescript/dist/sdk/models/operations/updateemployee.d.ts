import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
}
export declare class UpdateEmployeeHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class UpdateEmployeeSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateEmployeeRequest extends SpeakeasyBase {
    pathParams: UpdateEmployeePathParams;
    headers: UpdateEmployeeHeaders;
    request?: shared.EmployeeInput[];
    security: UpdateEmployeeSecurity;
}
export declare class UpdateEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    employees?: shared.Employees;
    statusCode: number;
}
