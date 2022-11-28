import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchInteractionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sessionSid: string;
    sid: string;
}
export declare class FetchInteractionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchInteractionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchInteractionPathParams;
    security: FetchInteractionSecurity;
}
export declare class FetchInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceSessionInteraction?: shared.ProxyV1ServiceSessionInteraction;
}
