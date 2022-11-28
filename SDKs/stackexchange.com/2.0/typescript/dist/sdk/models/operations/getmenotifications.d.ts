import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeNotificationsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetMeNotificationsRequest extends SpeakeasyBase {
    queryParams: GetMeNotificationsQueryParams;
}
export declare class GetMeNotificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
