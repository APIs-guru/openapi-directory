import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeNotificationsUnreadQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetMeNotificationsUnreadRequest extends SpeakeasyBase {
    queryParams: GetMeNotificationsUnreadQueryParams;
}
export declare class GetMeNotificationsUnreadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
