import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHPARTICIPANT_SERVERS: string[];
export declare class FetchParticipantPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    conferenceSid: string;
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
    apiV2010AccountConferenceParticipant?: shared.ApiV2010AccountConferenceParticipant;
}
