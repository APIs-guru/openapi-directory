import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditEmbedPresetAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;
}

export enum EditEmbedPresetAlt1RequestBodyOutroEnum {
    Nothing = "nothing"
}


export class EditEmbedPresetAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=outro" })
  outro?: EditEmbedPresetAlt1RequestBodyOutroEnum;
}


export class EditEmbedPresetAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: EditEmbedPresetAlt1PathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.preset+json" })
  request?: EditEmbedPresetAlt1RequestBody;
}


export class EditEmbedPresetAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  presets?: shared.Presets;
}
