import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmbedPresetAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;
}


export class GetEmbedPresetAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmbedPresetAlt1PathParams;
}


export class GetEmbedPresetAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  presets?: shared.Presets;
}
