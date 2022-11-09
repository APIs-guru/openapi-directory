import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEUSER_SERVERS: string[];
export declare class CreateUserPathParams extends SpeakeasyBase {
    serviceSid: string;
}
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
    pathParams: CreateUserPathParams;
    headers: CreateUserHeaders;
    request?: CreateUserCreateUserRequest;
    security: CreateUserSecurity;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV2ServiceUser?: shared.ChatV2ServiceUser;
}
