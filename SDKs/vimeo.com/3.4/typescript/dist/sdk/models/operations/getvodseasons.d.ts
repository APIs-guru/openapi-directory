import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodSeasonsPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare enum GetVodSeasonsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVodSeasonsFilterEnum {
    Viewable = "viewable"
}
export declare enum GetVodSeasonsSortEnum {
    Date = "date",
    Manual = "manual"
}
export declare class GetVodSeasonsQueryParams extends SpeakeasyBase {
    direction?: GetVodSeasonsDirectionEnum;
    filter?: GetVodSeasonsFilterEnum;
    page?: number;
    perPage?: number;
    sort?: GetVodSeasonsSortEnum;
}
export declare class GetVodSeasonsRequest extends SpeakeasyBase {
    pathParams: GetVodSeasonsPathParams;
    queryParams: GetVodSeasonsQueryParams;
}
export declare class GetVodSeasonsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandSeasons?: shared.OnDemandSeason[];
}
