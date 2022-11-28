import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoCreditsAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare enum GetVideoCreditsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVideoCreditsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetVideoCreditsAlt1QueryParams extends SpeakeasyBase {
    direction?: GetVideoCreditsAlt1DirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetVideoCreditsAlt1SortEnum;
}
export declare class GetVideoCreditsAlt1Request extends SpeakeasyBase {
    pathParams: GetVideoCreditsAlt1PathParams;
    queryParams: GetVideoCreditsAlt1QueryParams;
}
export declare class GetVideoCreditsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    credits?: shared.Credit[];
}
