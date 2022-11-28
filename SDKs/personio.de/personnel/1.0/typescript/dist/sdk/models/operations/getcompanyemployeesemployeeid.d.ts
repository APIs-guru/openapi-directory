import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCompanyEmployeesEmployeeIdPathParams extends SpeakeasyBase {
    employeeId: number;
}
export declare class GetCompanyEmployeesEmployeeIdRequest extends SpeakeasyBase {
    pathParams: GetCompanyEmployeesEmployeeIdPathParams;
}
export declare class GetCompanyEmployeesEmployeeIdResponse extends SpeakeasyBase {
    contentType: string;
    employeeResponse?: shared.EmployeeResponse;
    statusCode: number;
}
