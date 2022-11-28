import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteChannelPrivacyUserPathParams extends SpeakeasyBase {
    channelId: number;
    userId: number;
}
export declare class DeleteChannelPrivacyUserSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteChannelPrivacyUserRequest extends SpeakeasyBase {
    pathParams: DeleteChannelPrivacyUserPathParams;
    security: DeleteChannelPrivacyUserSecurity;
}
export declare class DeleteChannelPrivacyUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
