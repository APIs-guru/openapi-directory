import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNotificationsUnreadQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetNotificationsUnreadRequest extends SpeakeasyBase {
    queryParams: GetNotificationsUnreadQueryParams;
}
export declare class GetNotificationsUnreadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
