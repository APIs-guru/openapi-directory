import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCompositionSettingsServerList: readonly ["https://video.twilio.com"];
export declare class FetchCompositionSettingsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCompositionSettingsRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: FetchCompositionSettingsSecurity;
}
export declare class FetchCompositionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1CompositionSettings?: shared.VideoV1CompositionSettings;
}
