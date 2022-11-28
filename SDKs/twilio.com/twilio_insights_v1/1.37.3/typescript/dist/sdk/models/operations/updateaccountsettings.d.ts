import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateAccountSettingsServerList: readonly ["https://insights.twilio.com"];
export declare class UpdateAccountSettingsUpdateAccountSettingsRequest extends SpeakeasyBase {
    advancedFeatures?: boolean;
    subaccountSid?: string;
    voiceTrace?: boolean;
}
export declare class UpdateAccountSettingsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateAccountSettingsRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: UpdateAccountSettingsUpdateAccountSettingsRequest;
    security: UpdateAccountSettingsSecurity;
}
export declare class UpdateAccountSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1AccountSettings?: shared.InsightsV1AccountSettings;
}
