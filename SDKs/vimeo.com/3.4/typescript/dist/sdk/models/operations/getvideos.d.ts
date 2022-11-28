import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideosPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVideosFilterEnum {
    AppOnly = "app_only",
    Embeddable = "embeddable",
    Featured = "featured",
    Playable = "playable"
}
export declare enum GetVideosSortEnum {
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
export declare class GetVideosQueryParams extends SpeakeasyBase {
    containingUri?: string;
    direction?: GetVideosDirectionEnum;
    filter?: GetVideosFilterEnum;
    filterEmbeddable?: boolean;
    filterPlayable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetVideosSortEnum;
}
export declare class GetVideosRequest extends SpeakeasyBase {
    pathParams: GetVideosPathParams;
    queryParams: GetVideosQueryParams;
}
export declare class GetVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
