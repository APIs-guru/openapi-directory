import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployeePathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class GetEmployeeSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetEmployeeRequest extends SpeakeasyBase {
    pathParams: GetEmployeePathParams;
    security: GetEmployeeSecurity;
}
export declare class GetEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    employees?: shared.Employee[];
    errors?: shared.Error[];
}
