import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideoEmbedPresetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoEmbedPresetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideoEmbedPresetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddVideoEmbedPresetPathParams;

  @SpeakeasyMetadata()
  security: AddVideoEmbedPresetSecurity;
}


export class AddVideoEmbedPresetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
