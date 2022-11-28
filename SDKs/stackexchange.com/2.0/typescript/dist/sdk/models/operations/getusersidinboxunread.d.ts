import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdInboxUnreadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdInboxUnreadQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    since?: number;
    site: string;
}
export declare class GetUsersIdInboxUnreadRequest extends SpeakeasyBase {
    pathParams: GetUsersIdInboxUnreadPathParams;
    queryParams: GetUsersIdInboxUnreadQueryParams;
}
export declare class GetUsersIdInboxUnreadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
