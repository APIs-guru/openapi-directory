import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditEmbedPresetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum EditEmbedPresetRequestBodyOutroEnum {
    Nothing = "nothing"
}


export class EditEmbedPresetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outro" })
  outro?: EditEmbedPresetRequestBodyOutroEnum;
}


export class EditEmbedPresetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditEmbedPresetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.preset+json" })
  request?: EditEmbedPresetRequestBody;
}


export class EditEmbedPresetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  presets?: shared.Presets;
}
