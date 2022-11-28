import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchSessionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSessionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSessionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSessionPathParams;
    security: FetchSessionSecurity;
}
export declare class FetchSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceSession?: shared.ProxyV1ServiceSession;
}
