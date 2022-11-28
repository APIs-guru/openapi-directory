import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoEmbedPresetPathParams extends SpeakeasyBase {
    presetId: number;
    videoId: number;
}
export declare class GetVideoEmbedPresetRequest extends SpeakeasyBase {
    pathParams: GetVideoEmbedPresetPathParams;
}
export declare class GetVideoEmbedPresetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
