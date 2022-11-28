import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoPrivacyUsersAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class GetVideoPrivacyUsersAlt1QueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVideoPrivacyUsersAlt1Request extends SpeakeasyBase {
    pathParams: GetVideoPrivacyUsersAlt1PathParams;
    queryParams: GetVideoPrivacyUsersAlt1QueryParams;
}
export declare class GetVideoPrivacyUsersAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    users?: shared.User[];
}
