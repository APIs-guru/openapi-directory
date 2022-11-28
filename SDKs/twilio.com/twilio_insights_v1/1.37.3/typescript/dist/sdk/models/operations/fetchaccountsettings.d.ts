import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchAccountSettingsServerList: readonly ["https://insights.twilio.com"];
export declare class FetchAccountSettingsQueryParams extends SpeakeasyBase {
    subaccountSid?: string;
}
export declare class FetchAccountSettingsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAccountSettingsRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: FetchAccountSettingsQueryParams;
    security: FetchAccountSettingsSecurity;
}
export declare class FetchAccountSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1AccountSettings?: shared.InsightsV1AccountSettings;
}
