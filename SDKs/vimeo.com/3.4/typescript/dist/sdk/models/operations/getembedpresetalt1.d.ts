import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmbedPresetAlt1PathParams extends SpeakeasyBase {
    presetId: number;
}
export declare class GetEmbedPresetAlt1Request extends SpeakeasyBase {
    pathParams: GetEmbedPresetAlt1PathParams;
}
export declare class GetEmbedPresetAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    presets?: shared.Presets;
}
