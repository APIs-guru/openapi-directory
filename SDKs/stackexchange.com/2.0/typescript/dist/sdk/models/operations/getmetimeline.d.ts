import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeTimelineQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    page?: number;
    pagesize?: number;
    site: string;
    todate?: number;
}
export declare class GetMeTimelineRequest extends SpeakeasyBase {
    queryParams: GetMeTimelineQueryParams;
}
export declare class GetMeTimelineResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
