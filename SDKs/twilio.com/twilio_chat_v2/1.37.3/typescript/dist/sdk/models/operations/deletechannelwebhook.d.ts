import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteChannelWebhookServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteChannelWebhookPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteChannelWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteChannelWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteChannelWebhookPathParams;
    security: DeleteChannelWebhookSecurity;
}
export declare class DeleteChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
