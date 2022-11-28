import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmbedPresetVideosAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;
}


export class GetEmbedPresetVideosAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetEmbedPresetVideosAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmbedPresetVideosAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetEmbedPresetVideosAlt1QueryParams;
}


export class GetEmbedPresetVideosAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
