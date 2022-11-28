import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchDialingPermissionsSettingsServerList: readonly ["https://voice.twilio.com"];
export declare class FetchDialingPermissionsSettingsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDialingPermissionsSettingsRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: FetchDialingPermissionsSettingsSecurity;
}
export declare class FetchDialingPermissionsSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1DialingPermissionsDialingPermissionsSettings?: shared.VoiceV1DialingPermissionsDialingPermissionsSettings;
}
