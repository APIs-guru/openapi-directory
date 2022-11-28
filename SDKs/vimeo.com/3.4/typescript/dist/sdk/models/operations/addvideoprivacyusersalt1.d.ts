import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoPrivacyUsersAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class AddVideoPrivacyUsersAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoPrivacyUsersAlt1Request extends SpeakeasyBase {
    pathParams: AddVideoPrivacyUsersAlt1PathParams;
    security: AddVideoPrivacyUsersAlt1Security;
}
export declare class AddVideoPrivacyUsersAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
