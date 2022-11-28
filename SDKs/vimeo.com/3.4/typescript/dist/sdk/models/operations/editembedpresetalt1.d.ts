import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditEmbedPresetAlt1PathParams extends SpeakeasyBase {
    presetId: number;
}
export declare enum EditEmbedPresetAlt1RequestBodyOutroEnum {
    Nothing = "nothing"
}
export declare class EditEmbedPresetAlt1RequestBody extends SpeakeasyBase {
    outro?: EditEmbedPresetAlt1RequestBodyOutroEnum;
}
export declare class EditEmbedPresetAlt1Request extends SpeakeasyBase {
    pathParams: EditEmbedPresetAlt1PathParams;
    request?: EditEmbedPresetAlt1RequestBody;
}
export declare class EditEmbedPresetAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    presets?: shared.Presets;
}
