import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideoEmbedPresetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoEmbedPresetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoEmbedPresetPathParams;
}


export class GetVideoEmbedPresetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
