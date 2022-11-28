import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingsHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetSettingsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSettingsRequest extends SpeakeasyBase {
    headers: GetSettingsHeaders;
    security: GetSettingsSecurity;
}
export declare class GetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    settingsObject?: shared.SettingsObject;
    statusCode: number;
}
