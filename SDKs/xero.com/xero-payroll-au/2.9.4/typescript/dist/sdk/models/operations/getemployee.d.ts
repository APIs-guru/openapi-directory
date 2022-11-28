import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
}
export declare class GetEmployeeHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetEmployeeSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetEmployeeRequest extends SpeakeasyBase {
    pathParams: GetEmployeePathParams;
    headers: GetEmployeeHeaders;
    security: GetEmployeeSecurity;
}
export declare class GetEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    employees?: shared.Employees;
    statusCode: number;
}
