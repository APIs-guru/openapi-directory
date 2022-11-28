import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetChannelPrivacyUserPathParams extends SpeakeasyBase {
    channelId: number;
    userId: number;
}
export declare class SetChannelPrivacyUserSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SetChannelPrivacyUserRequest extends SpeakeasyBase {
    pathParams: SetChannelPrivacyUserPathParams;
    security: SetChannelPrivacyUserSecurity;
}
export declare class SetChannelPrivacyUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
