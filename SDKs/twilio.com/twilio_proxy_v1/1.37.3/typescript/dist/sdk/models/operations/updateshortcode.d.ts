import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateShortCodeServerList: readonly ["https://proxy.twilio.com"];
export declare class UpdateShortCodePathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateShortCodeUpdateShortCodeRequest extends SpeakeasyBase {
    isReserved?: boolean;
}
export declare class UpdateShortCodeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateShortCodeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateShortCodePathParams;
    request?: UpdateShortCodeUpdateShortCodeRequest;
    security: UpdateShortCodeSecurity;
}
export declare class UpdateShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
