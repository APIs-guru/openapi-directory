import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEventsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    since?: number;
    site: string;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    queryParams: GetEventsQueryParams;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
