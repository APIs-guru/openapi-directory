import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoPrivacyUsersPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class GetVideoPrivacyUsersQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVideoPrivacyUsersRequest extends SpeakeasyBase {
    pathParams: GetVideoPrivacyUsersPathParams;
    queryParams: GetVideoPrivacyUsersQueryParams;
}
export declare class GetVideoPrivacyUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    users?: shared.User[];
}
