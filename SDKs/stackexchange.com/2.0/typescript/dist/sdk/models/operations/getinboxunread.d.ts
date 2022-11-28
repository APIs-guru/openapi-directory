import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInboxUnreadQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    since?: number;
}
export declare class GetInboxUnreadRequest extends SpeakeasyBase {
    queryParams: GetInboxUnreadQueryParams;
}
export declare class GetInboxUnreadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
