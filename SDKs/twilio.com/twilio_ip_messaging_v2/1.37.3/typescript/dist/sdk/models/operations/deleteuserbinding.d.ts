import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUserBindingServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteUserBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
    userSid: string;
}
export declare class DeleteUserBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUserBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUserBindingPathParams;
    security: DeleteUserBindingSecurity;
}
export declare class DeleteUserBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
