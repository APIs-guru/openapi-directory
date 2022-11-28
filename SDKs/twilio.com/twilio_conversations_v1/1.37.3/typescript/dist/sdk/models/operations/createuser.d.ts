import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateUserServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateUserHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.UserEnumWebhookEnabledTypeEnum;
}
export declare class CreateUserCreateUserRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    identity: string;
    roleSid?: string;
}
export declare class CreateUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: CreateUserHeaders;
    request?: CreateUserCreateUserRequest;
    security: CreateUserSecurity;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1User?: shared.ConversationsV1User;
}
