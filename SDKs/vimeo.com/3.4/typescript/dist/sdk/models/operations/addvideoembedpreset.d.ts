import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoEmbedPresetPathParams extends SpeakeasyBase {
    presetId: number;
    videoId: number;
}
export declare class AddVideoEmbedPresetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoEmbedPresetRequest extends SpeakeasyBase {
    pathParams: AddVideoEmbedPresetPathParams;
    security: AddVideoEmbedPresetSecurity;
}
export declare class AddVideoEmbedPresetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
