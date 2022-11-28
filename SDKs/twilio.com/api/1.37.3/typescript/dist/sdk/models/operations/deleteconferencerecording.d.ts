import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteConferenceRecordingServerList: readonly ["https://api.twilio.com"];
export declare class DeleteConferenceRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    conferenceSid: string;
    sid: string;
}
export declare class DeleteConferenceRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteConferenceRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteConferenceRecordingPathParams;
    security: DeleteConferenceRecordingSecurity;
}
export declare class DeleteConferenceRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
