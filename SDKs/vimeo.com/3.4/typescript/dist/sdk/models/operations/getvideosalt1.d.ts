import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetVideosAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVideosAlt1FilterEnum {
    AppOnly = "app_only",
    Embeddable = "embeddable",
    Featured = "featured",
    Playable = "playable"
}
export declare enum GetVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Duration = "duration",
    LastUserActionEventDate = "last_user_action_event_date",
    Likes = "likes",
    ModifiedTime = "modified_time",
    Plays = "plays"
}
export declare class GetVideosAlt1QueryParams extends SpeakeasyBase {
    containingUri?: string;
    direction?: GetVideosAlt1DirectionEnum;
    filter?: GetVideosAlt1FilterEnum;
    filterEmbeddable?: boolean;
    filterPlayable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetVideosAlt1SortEnum;
}
export declare class GetVideosAlt1Request extends SpeakeasyBase {
    queryParams: GetVideosAlt1QueryParams;
}
export declare class GetVideosAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
