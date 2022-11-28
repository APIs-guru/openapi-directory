import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelPrivacyUsersPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare enum GetChannelPrivacyUsersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetChannelPrivacyUsersQueryParams extends SpeakeasyBase {
    direction?: GetChannelPrivacyUsersDirectionEnum;
    page?: number;
    perPage?: number;
}
export declare class GetChannelPrivacyUsersRequest extends SpeakeasyBase {
    pathParams: GetChannelPrivacyUsersPathParams;
    queryParams: GetChannelPrivacyUsersQueryParams;
}
export declare class GetChannelPrivacyUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    users?: shared.User[];
}
