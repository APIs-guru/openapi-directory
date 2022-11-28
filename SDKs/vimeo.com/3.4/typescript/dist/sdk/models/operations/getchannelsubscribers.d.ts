import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelSubscribersPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare enum GetChannelSubscribersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetChannelSubscribersFilterEnum {
    Moderators = "moderators"
}
export declare enum GetChannelSubscribersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetChannelSubscribersQueryParams extends SpeakeasyBase {
    direction?: GetChannelSubscribersDirectionEnum;
    filter: GetChannelSubscribersFilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetChannelSubscribersSortEnum;
}
export declare class GetChannelSubscribersRequest extends SpeakeasyBase {
    pathParams: GetChannelSubscribersPathParams;
    queryParams: GetChannelSubscribersQueryParams;
}
export declare class GetChannelSubscribersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    users?: shared.User[];
}
