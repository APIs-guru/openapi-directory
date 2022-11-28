import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEmployeeHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateEmployeeSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateEmployeeRequest extends SpeakeasyBase {
    headers: CreateEmployeeHeaders;
    request: shared.EmployeeInput[];
    security: CreateEmployeeSecurity;
}
export declare class CreateEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    employees?: shared.Employees;
    statusCode: number;
}
