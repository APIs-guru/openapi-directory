import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTrustedCommsCurrentCallServerList: readonly ["https://preview.twilio.com"];
export declare class FetchTrustedCommsCurrentCallHeaders extends SpeakeasyBase {
    xXcnamSensitivePhoneNumberFrom?: string;
    xXcnamSensitivePhoneNumberTo?: string;
}
export declare class FetchTrustedCommsCurrentCallSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrustedCommsCurrentCallRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: FetchTrustedCommsCurrentCallHeaders;
    security: FetchTrustedCommsCurrentCallSecurity;
}
export declare class FetchTrustedCommsCurrentCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewTrustedCommsCurrentCall?: shared.PreviewTrustedCommsCurrentCall;
}
