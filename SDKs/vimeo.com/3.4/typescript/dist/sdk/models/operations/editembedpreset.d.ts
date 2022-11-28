import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditEmbedPresetPathParams extends SpeakeasyBase {
    presetId: number;
    userId: number;
}
export declare enum EditEmbedPresetRequestBodyOutroEnum {
    Nothing = "nothing"
}
export declare class EditEmbedPresetRequestBody extends SpeakeasyBase {
    outro?: EditEmbedPresetRequestBodyOutroEnum;
}
export declare class EditEmbedPresetRequest extends SpeakeasyBase {
    pathParams: EditEmbedPresetPathParams;
    request?: EditEmbedPresetRequestBody;
}
export declare class EditEmbedPresetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    presets?: shared.Presets;
}
