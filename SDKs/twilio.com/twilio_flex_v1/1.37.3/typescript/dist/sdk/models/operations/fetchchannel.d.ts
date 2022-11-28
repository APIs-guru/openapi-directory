import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchChannelPathParams extends SpeakeasyBase {
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
    flexV1Channel?: shared.FlexV1Channel;
}
