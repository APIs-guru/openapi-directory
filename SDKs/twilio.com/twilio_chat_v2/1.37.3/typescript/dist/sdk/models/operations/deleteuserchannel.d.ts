import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUserChannelServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteUserChannelPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    userSid: string;
}
export declare class DeleteUserChannelHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.UserChannelEnumWebhookEnabledTypeEnum;
}
export declare class DeleteUserChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUserChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUserChannelPathParams;
    headers: DeleteUserChannelHeaders;
    security: DeleteUserChannelSecurity;
}
export declare class DeleteUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
