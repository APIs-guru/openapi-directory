import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetWatchLaterQueueAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetWatchLaterQueueAlt1FilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetWatchLaterQueueAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetWatchLaterQueueAlt1QueryParams extends SpeakeasyBase {
    direction?: GetWatchLaterQueueAlt1DirectionEnum;
    filter?: GetWatchLaterQueueAlt1FilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetWatchLaterQueueAlt1SortEnum;
}
export declare class GetWatchLaterQueueAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetWatchLaterQueueAlt1Request extends SpeakeasyBase {
    queryParams: GetWatchLaterQueueAlt1QueryParams;
    security: GetWatchLaterQueueAlt1Security;
}
export declare class GetWatchLaterQueueAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
