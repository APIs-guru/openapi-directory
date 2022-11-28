import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAppearancesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetAppearancesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetAppearancesFilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetAppearancesSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetAppearancesQueryParams extends SpeakeasyBase {
    direction?: GetAppearancesDirectionEnum;
    filter?: GetAppearancesFilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetAppearancesSortEnum;
}
export declare class GetAppearancesRequest extends SpeakeasyBase {
    pathParams: GetAppearancesPathParams;
    queryParams: GetAppearancesQueryParams;
}
export declare class GetAppearancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
