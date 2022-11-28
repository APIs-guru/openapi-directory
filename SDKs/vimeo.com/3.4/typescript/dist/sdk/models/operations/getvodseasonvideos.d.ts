import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodSeasonVideosPathParams extends SpeakeasyBase {
    ondemandId: number;
    seasonId: number;
}
export declare enum GetVodSeasonVideosFilterEnum {
    Viewable = "viewable"
}
export declare enum GetVodSeasonVideosSortEnum {
    Date = "date",
    Default = "default",
    Manual = "manual",
    Name = "name",
    PurchaseTime = "purchase_time",
    ReleaseDate = "release_date"
}
export declare class GetVodSeasonVideosQueryParams extends SpeakeasyBase {
    filter?: GetVodSeasonVideosFilterEnum;
    page?: number;
    perPage?: number;
    sort?: GetVodSeasonVideosSortEnum;
}
export declare class GetVodSeasonVideosRequest extends SpeakeasyBase {
    pathParams: GetVodSeasonVideosPathParams;
    queryParams: GetVodSeasonVideosQueryParams;
}
export declare class GetVodSeasonVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
