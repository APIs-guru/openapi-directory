import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelModeratorsPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare enum GetChannelModeratorsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetChannelModeratorsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetChannelModeratorsQueryParams extends SpeakeasyBase {
    direction?: GetChannelModeratorsDirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetChannelModeratorsSortEnum;
}
export declare class GetChannelModeratorsRequest extends SpeakeasyBase {
    pathParams: GetChannelModeratorsPathParams;
    queryParams: GetChannelModeratorsQueryParams;
}
export declare class GetChannelModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
