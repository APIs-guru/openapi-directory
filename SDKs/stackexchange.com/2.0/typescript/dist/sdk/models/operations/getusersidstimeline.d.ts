import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsTimelinePathParams extends SpeakeasyBase {
    ids: string;
}
export declare class GetUsersIdsTimelineQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    page?: number;
    pagesize?: number;
    site: string;
    todate?: number;
}
export declare class GetUsersIdsTimelineRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsTimelinePathParams;
    queryParams: GetUsersIdsTimelineQueryParams;
}
export declare class GetUsersIdsTimelineResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
