import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchShortCodeServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchShortCodePathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchShortCodeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchShortCodeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchShortCodePathParams;
    security: FetchShortCodeSecurity;
}
export declare class FetchShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
