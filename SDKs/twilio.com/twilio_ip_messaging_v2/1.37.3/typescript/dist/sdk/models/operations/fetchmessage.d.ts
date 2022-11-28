import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchMessageServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchMessagePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMessagePathParams;
    security: FetchMessageSecurity;
}
export declare class FetchMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceChannelMessage?: shared.IpMessagingV2ServiceChannelMessage;
}
