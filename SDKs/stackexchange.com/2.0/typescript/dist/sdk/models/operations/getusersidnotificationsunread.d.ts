import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdNotificationsUnreadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdNotificationsUnreadQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetUsersIdNotificationsUnreadRequest extends SpeakeasyBase {
    pathParams: GetUsersIdNotificationsUnreadPathParams;
    queryParams: GetUsersIdNotificationsUnreadQueryParams;
}
export declare class GetUsersIdNotificationsUnreadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
