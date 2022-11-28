import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideosWithTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetVideosWithTagDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVideosWithTagSortEnum {
    CreatedTime = "created_time",
    Duration = "duration",
    Name = "name"
}


export class GetVideosWithTagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideosWithTagDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideosWithTagSortEnum;
}


export class GetVideosWithTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideosWithTagPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideosWithTagQueryParams;
}


export class GetVideosWithTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
