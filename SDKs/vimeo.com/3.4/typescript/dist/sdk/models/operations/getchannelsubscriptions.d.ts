import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelSubscriptionsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetChannelSubscriptionsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetChannelSubscriptionsFilterEnum {
    Moderated = "moderated"
}
export declare enum GetChannelSubscriptionsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Videos = "videos"
}
export declare class GetChannelSubscriptionsQueryParams extends SpeakeasyBase {
    direction?: GetChannelSubscriptionsDirectionEnum;
    filter?: GetChannelSubscriptionsFilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetChannelSubscriptionsSortEnum;
}
export declare class GetChannelSubscriptionsRequest extends SpeakeasyBase {
    pathParams: GetChannelSubscriptionsPathParams;
    queryParams: GetChannelSubscriptionsQueryParams;
}
export declare class GetChannelSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channels?: shared.Channel[];
}
