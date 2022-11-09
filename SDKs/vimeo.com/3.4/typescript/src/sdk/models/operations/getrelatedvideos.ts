import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRelatedVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetRelatedVideosFilterEnum {
    Related = "related"
}


export class GetRelatedVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetRelatedVideosFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetRelatedVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRelatedVideosPathParams;

  @Metadata()
  queryParams: GetRelatedVideosQueryParams;
}


export class GetRelatedVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
