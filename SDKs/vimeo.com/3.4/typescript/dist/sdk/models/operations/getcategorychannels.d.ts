import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoryChannelsPathParams extends SpeakeasyBase {
    category: string;
}
export declare enum GetCategoryChannelsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetCategoryChannelsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Videos = "videos"
}
export declare class GetCategoryChannelsQueryParams extends SpeakeasyBase {
    direction?: GetCategoryChannelsDirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetCategoryChannelsSortEnum;
}
export declare class GetCategoryChannelsRequest extends SpeakeasyBase {
    pathParams: GetCategoryChannelsPathParams;
    queryParams: GetCategoryChannelsQueryParams;
}
export declare class GetCategoryChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channels?: shared.Channel[];
    legacyError?: shared.LegacyError;
}
