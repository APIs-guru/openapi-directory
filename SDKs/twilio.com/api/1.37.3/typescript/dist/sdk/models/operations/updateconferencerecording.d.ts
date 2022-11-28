import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConferenceRecordingServerList: readonly ["https://api.twilio.com"];
export declare class UpdateConferenceRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    conferenceSid: string;
    sid: string;
}
export declare class UpdateConferenceRecordingUpdateConferenceRecordingRequest extends SpeakeasyBase {
    pauseBehavior?: string;
    status: shared.ConferenceRecordingEnumStatusEnum;
}
export declare class UpdateConferenceRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConferenceRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateConferenceRecordingPathParams;
    request?: UpdateConferenceRecordingUpdateConferenceRecordingRequest;
    security: UpdateConferenceRecordingSecurity;
}
export declare class UpdateConferenceRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountConferenceConferenceRecording?: shared.ApiV2010AccountConferenceConferenceRecording;
}
