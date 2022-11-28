import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateCompositionSettingsServerList: readonly ["https://video.twilio.com"];
export declare class CreateCompositionSettingsCreateCompositionSettingsRequest extends SpeakeasyBase {
    awsCredentialsSid?: string;
    awsS3Url?: string;
    awsStorageEnabled?: boolean;
    encryptionEnabled?: boolean;
    encryptionKeySid?: string;
    friendlyName: string;
}
export declare class CreateCompositionSettingsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCompositionSettingsRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateCompositionSettingsCreateCompositionSettingsRequest;
    security: CreateCompositionSettingsSecurity;
}
export declare class CreateCompositionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1CompositionSettings?: shared.VideoV1CompositionSettings;
}
