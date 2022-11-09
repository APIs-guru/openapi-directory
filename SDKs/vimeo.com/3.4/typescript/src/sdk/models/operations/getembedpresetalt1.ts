import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmbedPresetAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;
}


export class GetEmbedPresetAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmbedPresetAlt1PathParams;
}


export class GetEmbedPresetAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  presets?: shared.Presets;
}
