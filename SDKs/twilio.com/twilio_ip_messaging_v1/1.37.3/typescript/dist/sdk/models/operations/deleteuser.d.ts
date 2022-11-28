import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUserServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteUserPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUserPathParams;
    security: DeleteUserSecurity;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
