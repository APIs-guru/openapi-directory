import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUserServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateUserHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.UserEnumWebhookEnabledTypeEnum;
}
export declare class UpdateUserUpdateUserRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    roleSid?: string;
}
export declare class UpdateUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUserPathParams;
    headers: UpdateUserHeaders;
    request?: UpdateUserUpdateUserRequest;
    security: UpdateUserSecurity;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1User?: shared.ConversationsV1User;
}
