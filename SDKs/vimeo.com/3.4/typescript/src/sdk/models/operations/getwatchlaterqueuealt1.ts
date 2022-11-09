import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetWatchLaterQueueAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetWatchLaterQueueAlt1FilterEnum {
    Embeddable = "embeddable"
}

export enum GetWatchLaterQueueAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Duration = "duration"
,    Likes = "likes"
,    Plays = "plays"
}


export class GetWatchLaterQueueAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetWatchLaterQueueAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetWatchLaterQueueAlt1FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetWatchLaterQueueAlt1SortEnum;
}


export class GetWatchLaterQueueAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWatchLaterQueueAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWatchLaterQueueAlt1QueryParams;

  @Metadata()
  security: GetWatchLaterQueueAlt1Security;
}


export class GetWatchLaterQueueAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
