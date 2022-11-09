import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAssetSettingsHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetAssetSettingsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAssetSettingsRequest extends SpeakeasyBase {
    headers: GetAssetSettingsHeaders;
    security: GetAssetSettingsSecurity;
}
export declare class GetAssetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    setting?: shared.Setting;
    statusCode: number;
}
