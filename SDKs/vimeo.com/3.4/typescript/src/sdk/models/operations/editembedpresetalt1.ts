import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditEmbedPresetAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;
}

export enum EditEmbedPresetAlt1RequestBodyOutroEnum {
    Nothing = "nothing"
}


export class EditEmbedPresetAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outro" })
  outro?: EditEmbedPresetAlt1RequestBodyOutroEnum;
}


export class EditEmbedPresetAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditEmbedPresetAlt1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.preset+json" })
  request?: EditEmbedPresetAlt1RequestBody;
}


export class EditEmbedPresetAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  presets?: shared.Presets;
}
