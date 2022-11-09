import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHRECORDINGSETTINGS_SERVERS: string[];
export declare class FetchRecordingSettingsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRecordingSettingsRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: FetchRecordingSettingsSecurity;
}
export declare class FetchRecordingSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RecordingSettings?: shared.VideoV1RecordingSettings;
}
