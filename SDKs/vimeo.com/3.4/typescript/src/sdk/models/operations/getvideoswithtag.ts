import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideosWithTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetVideosWithTagDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVideosWithTagSortEnum {
    CreatedTime = "created_time"
,    Duration = "duration"
,    Name = "name"
}


export class GetVideosWithTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideosWithTagDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideosWithTagSortEnum;
}


export class GetVideosWithTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideosWithTagPathParams;

  @Metadata()
  queryParams: GetVideosWithTagQueryParams;
}


export class GetVideosWithTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
