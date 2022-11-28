import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateShortCodeServerList: readonly ["https://proxy.twilio.com"];
export declare class CreateShortCodePathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateShortCodeCreateShortCodeRequest extends SpeakeasyBase {
    sid: string;
}
export declare class CreateShortCodeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateShortCodeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateShortCodePathParams;
    request?: CreateShortCodeCreateShortCodeRequest;
    security: CreateShortCodeSecurity;
}
export declare class CreateShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
