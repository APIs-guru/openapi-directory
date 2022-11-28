import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoPrivacyUserPathParams extends SpeakeasyBase {
    userId: number;
    videoId: number;
}
export declare class DeleteVideoPrivacyUserSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoPrivacyUserRequest extends SpeakeasyBase {
    pathParams: DeleteVideoPrivacyUserPathParams;
    security: DeleteVideoPrivacyUserSecurity;
}
export declare class DeleteVideoPrivacyUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
