import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchMessageInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class FetchMessageInteractionPathParams extends SpeakeasyBase {
    participantSid: string;
    serviceSid: string;
    sessionSid: string;
    sid: string;
}
export declare class FetchMessageInteractionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMessageInteractionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMessageInteractionPathParams;
    security: FetchMessageInteractionSecurity;
}
export declare class FetchMessageInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceSessionParticipantMessageInteraction?: shared.ProxyV1ServiceSessionParticipantMessageInteraction;
}
