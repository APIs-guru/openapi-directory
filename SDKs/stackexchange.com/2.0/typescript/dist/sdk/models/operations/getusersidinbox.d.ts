import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdInboxPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdInboxQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetUsersIdInboxRequest extends SpeakeasyBase {
    pathParams: GetUsersIdInboxPathParams;
    queryParams: GetUsersIdInboxQueryParams;
}
export declare class GetUsersIdInboxResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
