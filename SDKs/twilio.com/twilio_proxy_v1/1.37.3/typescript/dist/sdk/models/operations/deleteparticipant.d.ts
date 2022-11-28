import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteParticipantServerList: readonly ["https://proxy.twilio.com"];
export declare class DeleteParticipantPathParams extends SpeakeasyBase {
    serviceSid: string;
    sessionSid: string;
    sid: string;
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
