import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATECALLRECORDING_SERVERS: string[];
export declare class UpdateCallRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    sid: string;
}
export declare class UpdateCallRecordingUpdateCallRecordingRequest extends SpeakeasyBase {
    pauseBehavior?: string;
    status: shared.CallRecordingEnumStatusEnum;
}
export declare class UpdateCallRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateCallRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateCallRecordingPathParams;
    request?: UpdateCallRecordingUpdateCallRecordingRequest;
    security: UpdateCallRecordingSecurity;
}
export declare class UpdateCallRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallCallRecording?: shared.ApiV2010AccountCallCallRecording;
}
