import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESERVICEUSER_SERVERS: string[];
export declare class UpdateServiceUserPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class UpdateServiceUserHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceUserEnumWebhookEnabledTypeEnum;
}
export declare class UpdateServiceUserUpdateServiceUserRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    roleSid?: string;
}
export declare class UpdateServiceUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceUserPathParams;
    headers: UpdateServiceUserHeaders;
    request?: UpdateServiceUserUpdateServiceUserRequest;
    security: UpdateServiceUserSecurity;
}
export declare class UpdateServiceUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceUser?: shared.ConversationsV1ServiceServiceUser;
}
