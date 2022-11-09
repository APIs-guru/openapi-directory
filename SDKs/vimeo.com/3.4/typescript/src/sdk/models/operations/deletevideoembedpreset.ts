import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideoEmbedPresetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class DeleteVideoEmbedPresetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVideoEmbedPresetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideoEmbedPresetPathParams;

  @Metadata()
  security: DeleteVideoEmbedPresetSecurity;
}


export class DeleteVideoEmbedPresetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
