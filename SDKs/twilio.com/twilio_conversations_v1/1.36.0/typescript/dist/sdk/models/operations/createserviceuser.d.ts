import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESERVICEUSER_SERVERS: string[];
export declare class CreateServiceUserPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class CreateServiceUserHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceUserEnumWebhookEnabledTypeEnum;
}
export declare class CreateServiceUserCreateServiceUserRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    identity: string;
    roleSid?: string;
}
export declare class CreateServiceUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateServiceUserPathParams;
    headers: CreateServiceUserHeaders;
    request?: CreateServiceUserCreateServiceUserRequest;
    security: CreateServiceUserSecurity;
}
export declare class CreateServiceUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceUser?: shared.ConversationsV1ServiceServiceUser;
}
