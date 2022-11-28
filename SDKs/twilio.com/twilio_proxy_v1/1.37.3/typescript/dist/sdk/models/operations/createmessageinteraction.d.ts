import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateMessageInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class CreateMessageInteractionPathParams extends SpeakeasyBase {
    participantSid: string;
    serviceSid: string;
    sessionSid: string;
}
export declare class CreateMessageInteractionCreateMessageInteractionRequest extends SpeakeasyBase {
    body?: string;
    mediaUrl?: string[];
}
export declare class CreateMessageInteractionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateMessageInteractionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateMessageInteractionPathParams;
    request?: CreateMessageInteractionCreateMessageInteractionRequest;
    security: CreateMessageInteractionSecurity;
}
export declare class CreateMessageInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceSessionParticipantMessageInteraction?: shared.ProxyV1ServiceSessionParticipantMessageInteraction;
}
