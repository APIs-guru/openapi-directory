import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNotificationsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetNotificationsRequest extends SpeakeasyBase {
    queryParams: GetNotificationsQueryParams;
}
export declare class GetNotificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
