import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdPrivilegesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdPrivilegesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetUsersIdPrivilegesRequest extends SpeakeasyBase {
    pathParams: GetUsersIdPrivilegesPathParams;
    queryParams: GetUsersIdPrivilegesQueryParams;
}
export declare class GetUsersIdPrivilegesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
