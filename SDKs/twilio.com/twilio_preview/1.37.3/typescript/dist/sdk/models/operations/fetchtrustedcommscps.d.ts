import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTrustedCommsCpsServerList: readonly ["https://preview.twilio.com"];
export declare class FetchTrustedCommsCpsHeaders extends SpeakeasyBase {
    xXcnamSensitivePhoneNumber?: string;
}
export declare class FetchTrustedCommsCpsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrustedCommsCpsRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: FetchTrustedCommsCpsHeaders;
    security: FetchTrustedCommsCpsSecurity;
}
export declare class FetchTrustedCommsCpsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewTrustedCommsCps?: shared.PreviewTrustedCommsCps;
}
