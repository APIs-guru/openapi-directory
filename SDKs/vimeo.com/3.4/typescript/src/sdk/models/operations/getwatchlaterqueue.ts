import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWatchLaterQueuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetWatchLaterQueueDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetWatchLaterQueueFilterEnum {
    Embeddable = "embeddable"
}

export enum GetWatchLaterQueueSortEnum {
    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Duration = "duration"
,    Likes = "likes"
,    Plays = "plays"
}


export class GetWatchLaterQueueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetWatchLaterQueueDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetWatchLaterQueueFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetWatchLaterQueueSortEnum;
}


export class GetWatchLaterQueueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWatchLaterQueueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWatchLaterQueuePathParams;

  @Metadata()
  queryParams: GetWatchLaterQueueQueryParams;

  @Metadata()
  security: GetWatchLaterQueueSecurity;
}


export class GetWatchLaterQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
