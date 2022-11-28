import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployeesQueryParams extends SpeakeasyBase {
    order?: string;
    page?: number;
    where?: string;
}
export declare class GetEmployeesHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    xeroTenantId: string;
}
export declare class GetEmployeesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetEmployeesRequest extends SpeakeasyBase {
    queryParams: GetEmployeesQueryParams;
    headers: GetEmployeesHeaders;
    security: GetEmployeesSecurity;
}
export declare class GetEmployeesResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    employees?: shared.Employees;
    statusCode: number;
}
