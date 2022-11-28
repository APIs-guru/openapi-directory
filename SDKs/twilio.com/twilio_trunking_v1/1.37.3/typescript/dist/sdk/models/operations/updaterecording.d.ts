import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateRecordingServerList: readonly ["https://trunking.twilio.com"];
export declare class UpdateRecordingPathParams extends SpeakeasyBase {
    trunkSid: string;
}
export declare class UpdateRecordingUpdateRecordingRequest extends SpeakeasyBase {
    mode?: shared.RecordingEnumRecordingModeEnum;
    trim?: shared.RecordingEnumRecordingTrimEnum;
}
export declare class UpdateRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateRecordingPathParams;
    request?: UpdateRecordingUpdateRecordingRequest;
    security: UpdateRecordingSecurity;
}
export declare class UpdateRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1TrunkRecording?: shared.TrunkingV1TrunkRecording;
}
