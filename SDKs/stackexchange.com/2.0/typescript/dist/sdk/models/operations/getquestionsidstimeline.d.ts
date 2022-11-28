import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQuestionsIdsTimelinePathParams extends SpeakeasyBase {
    ids: string;
}
export declare class GetQuestionsIdsTimelineQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    page?: number;
    pagesize?: number;
    site: string;
    todate?: number;
}
export declare class GetQuestionsIdsTimelineRequest extends SpeakeasyBase {
    pathParams: GetQuestionsIdsTimelinePathParams;
    queryParams: GetQuestionsIdsTimelineQueryParams;
}
export declare class GetQuestionsIdsTimelineResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
