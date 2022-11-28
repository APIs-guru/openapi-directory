import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteMessageServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteMessagePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteMessagePathParams;
    security: DeleteMessageSecurity;
}
export declare class DeleteMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
