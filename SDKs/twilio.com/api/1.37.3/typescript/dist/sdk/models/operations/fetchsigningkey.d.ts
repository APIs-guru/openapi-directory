import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSigningKeyServerList: readonly ["https://api.twilio.com"];
export declare class FetchSigningKeyPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchSigningKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSigningKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSigningKeyPathParams;
    security: FetchSigningKeySecurity;
}
export declare class FetchSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSigningKey?: shared.ApiV2010AccountSigningKey;
}
