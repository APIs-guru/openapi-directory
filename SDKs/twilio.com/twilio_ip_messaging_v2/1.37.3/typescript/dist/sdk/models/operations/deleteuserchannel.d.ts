import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUserChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteUserChannelPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    userSid: string;
}
export declare class DeleteUserChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUserChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUserChannelPathParams;
    security: DeleteUserChannelSecurity;
}
export declare class DeleteUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
