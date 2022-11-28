import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUserServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateUserPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
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
    request?: UpdateUserUpdateUserRequest;
    security: UpdateUserSecurity;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV1ServiceUser?: shared.IpMessagingV1ServiceUser;
}
