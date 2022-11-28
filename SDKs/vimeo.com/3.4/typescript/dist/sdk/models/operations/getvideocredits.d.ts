import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoCreditsPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare enum GetVideoCreditsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVideoCreditsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetVideoCreditsQueryParams extends SpeakeasyBase {
    direction?: GetVideoCreditsDirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetVideoCreditsSortEnum;
}
export declare class GetVideoCreditsRequest extends SpeakeasyBase {
    pathParams: GetVideoCreditsPathParams;
    queryParams: GetVideoCreditsQueryParams;
}
export declare class GetVideoCreditsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    credits?: shared.Credit[];
}
