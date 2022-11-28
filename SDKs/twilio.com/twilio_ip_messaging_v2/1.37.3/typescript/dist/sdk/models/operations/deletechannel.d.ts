import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteChannelHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ChannelEnumWebhookEnabledTypeEnum;
}
export declare class DeleteChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteChannelPathParams;
    headers: DeleteChannelHeaders;
    security: DeleteChannelSecurity;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
