import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetChannelsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetChannelsFilterEnum {
    Featured = "featured"
}
export declare enum GetChannelsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Relevant = "relevant",
    Videos = "videos"
}
export declare class GetChannelsQueryParams extends SpeakeasyBase {
    direction?: GetChannelsDirectionEnum;
    filter?: GetChannelsFilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetChannelsSortEnum;
}
export declare class GetChannelsRequest extends SpeakeasyBase {
    queryParams: GetChannelsQueryParams;
}
export declare class GetChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channels?: shared.Channel[];
    legacyError?: shared.LegacyError;
}
