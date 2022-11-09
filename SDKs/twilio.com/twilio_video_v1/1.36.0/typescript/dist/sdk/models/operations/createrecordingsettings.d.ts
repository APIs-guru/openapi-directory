import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATERECORDINGSETTINGS_SERVERS: string[];
export declare class CreateRecordingSettingsCreateRecordingSettingsRequest extends SpeakeasyBase {
    awsCredentialsSid?: string;
    awsS3Url?: string;
    awsStorageEnabled?: boolean;
    encryptionEnabled?: boolean;
    encryptionKeySid?: string;
    friendlyName: string;
}
export declare class CreateRecordingSettingsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateRecordingSettingsRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateRecordingSettingsCreateRecordingSettingsRequest;
    security: CreateRecordingSettingsSecurity;
}
export declare class CreateRecordingSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RecordingSettings?: shared.VideoV1RecordingSettings;
}
