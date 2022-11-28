import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdWritePermissionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdWritePermissionsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetUsersIdWritePermissionsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdWritePermissionsPathParams;
    queryParams: GetUsersIdWritePermissionsQueryParams;
}
export declare class GetUsersIdWritePermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
