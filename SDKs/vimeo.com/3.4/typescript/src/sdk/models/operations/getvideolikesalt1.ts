import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideoLikesAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum GetVideoLikesAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVideoLikesAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetVideoLikesAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideoLikesAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideoLikesAlt1SortEnum;
}


export class GetVideoLikesAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoLikesAlt1PathParams;

  @Metadata()
  queryParams: GetVideoLikesAlt1QueryParams;
}


export class GetVideoLikesAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
