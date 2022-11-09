import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditEmbedPresetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum EditEmbedPresetRequestBodyOutroEnum {
    Nothing = "nothing"
}


export class EditEmbedPresetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=outro" })
  outro?: EditEmbedPresetRequestBodyOutroEnum;
}


export class EditEmbedPresetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditEmbedPresetPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.preset+json" })
  request?: EditEmbedPresetRequestBody;
}


export class EditEmbedPresetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  presets?: shared.Presets;
}
