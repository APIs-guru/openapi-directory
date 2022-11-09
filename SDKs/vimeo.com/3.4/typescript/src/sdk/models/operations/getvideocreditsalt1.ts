import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideoCreditsAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetVideoCreditsAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVideoCreditsAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetVideoCreditsAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideoCreditsAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideoCreditsAlt1SortEnum;
}


export class GetVideoCreditsAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoCreditsAlt1PathParams;

  @Metadata()
  queryParams: GetVideoCreditsAlt1QueryParams;
}


export class GetVideoCreditsAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Credit })
  credits?: shared.Credit[];
}
