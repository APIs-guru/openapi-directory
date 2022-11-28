import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWebChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchWebChannelPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchWebChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWebChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWebChannelPathParams;
    security: FetchWebChannelSecurity;
}
export declare class FetchWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1WebChannel?: shared.FlexV1WebChannel;
}
