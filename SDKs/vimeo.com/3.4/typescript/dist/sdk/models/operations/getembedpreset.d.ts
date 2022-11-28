import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmbedPresetPathParams extends SpeakeasyBase {
    presetId: number;
    userId: number;
}
export declare class GetEmbedPresetRequest extends SpeakeasyBase {
    pathParams: GetEmbedPresetPathParams;
}
export declare class GetEmbedPresetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    presets?: shared.Presets;
}
