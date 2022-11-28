import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTrustedCommsBrandedChannelServerList: readonly ["https://preview.twilio.com"];
export declare class FetchTrustedCommsBrandedChannelPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchTrustedCommsBrandedChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrustedCommsBrandedChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTrustedCommsBrandedChannelPathParams;
    security: FetchTrustedCommsBrandedChannelSecurity;
}
export declare class FetchTrustedCommsBrandedChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewTrustedCommsBrandedChannel?: shared.PreviewTrustedCommsBrandedChannel;
}
