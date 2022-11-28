import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodVideosPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare enum GetVodVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVodVideosFilterEnum {
    All = "all",
    Buy = "buy",
    ExpiringSoon = "expiring_soon",
    Extra = "extra",
    Main = "main",
    MainViewable = "main.viewable",
    Rent = "rent",
    Trailer = "trailer",
    Unwatched = "unwatched",
    Viewable = "viewable",
    Watched = "watched"
}
export declare enum GetVodVideosSortEnum {
    Date = "date",
    Default = "default",
    Episode = "episode",
    Manual = "manual",
    Name = "name",
    PurchaseTime = "purchase_time",
    ReleaseDate = "release_date"
}
export declare class GetVodVideosQueryParams extends SpeakeasyBase {
    direction?: GetVodVideosDirectionEnum;
    filter?: GetVodVideosFilterEnum;
    page?: number;
    perPage?: number;
    sort?: GetVodVideosSortEnum;
}
export declare class GetVodVideosRequest extends SpeakeasyBase {
    pathParams: GetVodVideosPathParams;
    queryParams: GetVodVideosQueryParams;
}
export declare class GetVodVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
