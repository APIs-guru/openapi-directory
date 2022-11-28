import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWatchLaterQueuePathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetWatchLaterQueueDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetWatchLaterQueueFilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetWatchLaterQueueSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetWatchLaterQueueQueryParams extends SpeakeasyBase {
    direction?: GetWatchLaterQueueDirectionEnum;
    filter?: GetWatchLaterQueueFilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetWatchLaterQueueSortEnum;
}
export declare class GetWatchLaterQueueSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetWatchLaterQueueRequest extends SpeakeasyBase {
    pathParams: GetWatchLaterQueuePathParams;
    queryParams: GetWatchLaterQueueQueryParams;
    security: GetWatchLaterQueueSecurity;
}
export declare class GetWatchLaterQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
