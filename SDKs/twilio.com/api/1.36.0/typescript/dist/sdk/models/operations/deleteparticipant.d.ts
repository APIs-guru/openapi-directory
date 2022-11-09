import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEPARTICIPANT_SERVERS: string[];
export declare class DeleteParticipantPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    conferenceSid: string;
}
export declare class DeleteParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteParticipantPathParams;
    security: DeleteParticipantSecurity;
}
export declare class DeleteParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
