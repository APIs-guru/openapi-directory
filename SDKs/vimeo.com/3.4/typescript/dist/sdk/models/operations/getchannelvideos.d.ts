import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelVideosPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare enum GetChannelVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetChannelVideosFilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetChannelVideosSortEnum {
    Added = "added",
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Duration = "duration",
    Likes = "likes",
    Manual = "manual",
    ModifiedTime = "modified_time",
    Plays = "plays"
}
export declare class GetChannelVideosQueryParams extends SpeakeasyBase {
    containingUri?: string;
    direction?: GetChannelVideosDirectionEnum;
    filter?: GetChannelVideosFilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetChannelVideosSortEnum;
}
export declare class GetChannelVideosRequest extends SpeakeasyBase {
    pathParams: GetChannelVideosPathParams;
    queryParams: GetChannelVideosQueryParams;
}
export declare class GetChannelVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    videos?: shared.Video[];
}
