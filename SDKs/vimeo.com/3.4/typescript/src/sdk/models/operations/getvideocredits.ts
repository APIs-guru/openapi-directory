import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideoCreditsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetVideoCreditsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVideoCreditsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetVideoCreditsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideoCreditsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideoCreditsSortEnum;
}


export class GetVideoCreditsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoCreditsPathParams;

  @Metadata()
  queryParams: GetVideoCreditsQueryParams;
}


export class GetVideoCreditsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Credit })
  credits?: shared.Credit[];
}
