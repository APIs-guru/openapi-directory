import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeInboxUnreadQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    since?: number;
    site: string;
}
export declare class GetMeInboxUnreadRequest extends SpeakeasyBase {
    queryParams: GetMeInboxUnreadQueryParams;
}
export declare class GetMeInboxUnreadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
