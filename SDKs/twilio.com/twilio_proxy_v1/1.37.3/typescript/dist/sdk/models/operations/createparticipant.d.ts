import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateParticipantServerList: readonly ["https://proxy.twilio.com"];
export declare class CreateParticipantPathParams extends SpeakeasyBase {
    serviceSid: string;
    sessionSid: string;
}
export declare class CreateParticipantCreateParticipantRequest extends SpeakeasyBase {
    friendlyName?: string;
    identifier: string;
    proxyIdentifier?: string;
    proxyIdentifierSid?: string;
}
export declare class CreateParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateParticipantPathParams;
    request?: CreateParticipantCreateParticipantRequest;
    security: CreateParticipantSecurity;
}
export declare class CreateParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceSessionParticipant?: shared.ProxyV1ServiceSessionParticipant;
}
