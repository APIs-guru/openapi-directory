import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchChannelPathParams;
    security: FetchChannelSecurity;
}
export declare class FetchChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV1ServiceChannel?: shared.IpMessagingV1ServiceChannel;
}
