import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoEmbedPresetPathParams extends SpeakeasyBase {
    presetId: number;
    videoId: number;
}
export declare class DeleteVideoEmbedPresetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoEmbedPresetRequest extends SpeakeasyBase {
    pathParams: DeleteVideoEmbedPresetPathParams;
    security: DeleteVideoEmbedPresetSecurity;
}
export declare class DeleteVideoEmbedPresetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
