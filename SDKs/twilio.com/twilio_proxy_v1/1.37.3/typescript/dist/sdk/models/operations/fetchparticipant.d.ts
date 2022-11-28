import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchParticipantServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchParticipantPathParams extends SpeakeasyBase {
    serviceSid: string;
    sessionSid: string;
    sid: string;
}
export declare class FetchParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchParticipantPathParams;
    security: FetchParticipantSecurity;
}
export declare class FetchParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceSessionParticipant?: shared.ProxyV1ServiceSessionParticipant;
}
