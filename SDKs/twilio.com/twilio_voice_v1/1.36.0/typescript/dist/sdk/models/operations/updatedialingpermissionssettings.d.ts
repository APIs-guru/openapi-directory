import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEDIALINGPERMISSIONSSETTINGS_SERVERS: string[];
export declare class UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest extends SpeakeasyBase {
    dialingPermissionsInheritance?: boolean;
}
export declare class UpdateDialingPermissionsSettingsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDialingPermissionsSettingsRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest;
    security: UpdateDialingPermissionsSettingsSecurity;
}
export declare class UpdateDialingPermissionsSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1DialingPermissionsDialingPermissionsSettings?: shared.VoiceV1DialingPermissionsDialingPermissionsSettings;
}
