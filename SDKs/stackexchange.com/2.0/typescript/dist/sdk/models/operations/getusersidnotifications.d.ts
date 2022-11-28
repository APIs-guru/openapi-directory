import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdNotificationsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdNotificationsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetUsersIdNotificationsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdNotificationsPathParams;
    queryParams: GetUsersIdNotificationsQueryParams;
}
export declare class GetUsersIdNotificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
