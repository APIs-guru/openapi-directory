import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCHANNEL_SERVERS: string[];
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
    chatV1ServiceChannel?: shared.ChatV1ServiceChannel;
}
