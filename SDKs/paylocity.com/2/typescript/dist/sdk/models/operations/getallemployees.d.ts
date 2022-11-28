import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllEmployeesPathParams extends SpeakeasyBase {
    companyId: string;
}
export declare class GetAllEmployeesQueryParams extends SpeakeasyBase {
    includetotalcount?: boolean;
    pagenumber?: number;
    pagesize?: number;
}
export declare class GetAllEmployeesSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetAllEmployeesRequest extends SpeakeasyBase {
    pathParams: GetAllEmployeesPathParams;
    queryParams: GetAllEmployeesQueryParams;
    security: GetAllEmployeesSecurity;
}
export declare class GetAllEmployeesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    employeeInfos?: shared.EmployeeInfo[];
    errors?: shared.Error[];
}
