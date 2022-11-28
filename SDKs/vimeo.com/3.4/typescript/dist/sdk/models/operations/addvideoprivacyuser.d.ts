import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoPrivacyUserPathParams extends SpeakeasyBase {
    userId: number;
    videoId: number;
}
export declare class AddVideoPrivacyUserSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoPrivacyUserRequest extends SpeakeasyBase {
    pathParams: AddVideoPrivacyUserPathParams;
    security: AddVideoPrivacyUserSecurity;
}
export declare class AddVideoPrivacyUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    user?: shared.User;
}
