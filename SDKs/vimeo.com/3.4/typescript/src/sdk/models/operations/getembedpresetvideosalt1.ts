import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmbedPresetVideosAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preset_id" })
  presetId: number;
}


export class GetEmbedPresetVideosAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetEmbedPresetVideosAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmbedPresetVideosAlt1PathParams;

  @Metadata()
  queryParams: GetEmbedPresetVideosAlt1QueryParams;
}


export class GetEmbedPresetVideosAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
