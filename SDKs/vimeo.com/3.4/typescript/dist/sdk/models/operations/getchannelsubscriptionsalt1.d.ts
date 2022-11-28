import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetChannelSubscriptionsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetChannelSubscriptionsAlt1FilterEnum {
    Moderated = "moderated"
}
export declare enum GetChannelSubscriptionsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Videos = "videos"
}
export declare class GetChannelSubscriptionsAlt1QueryParams extends SpeakeasyBase {
    direction?: GetChannelSubscriptionsAlt1DirectionEnum;
    filter?: GetChannelSubscriptionsAlt1FilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetChannelSubscriptionsAlt1SortEnum;
}
export declare class GetChannelSubscriptionsAlt1Request extends SpeakeasyBase {
    queryParams: GetChannelSubscriptionsAlt1QueryParams;
}
export declare class GetChannelSubscriptionsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channels?: shared.Channel[];
}
