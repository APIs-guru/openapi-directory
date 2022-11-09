import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTRUSTEDCOMMSBRANDEDCHANNEL_SERVERS: string[];
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
