import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetWatchLaterQueueAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetWatchLaterQueueAlt1FilterEnum {
    Embeddable = "embeddable"
}

export enum GetWatchLaterQueueAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}


export class GetWatchLaterQueueAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetWatchLaterQueueAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetWatchLaterQueueAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetWatchLaterQueueAlt1SortEnum;
}


export class GetWatchLaterQueueAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWatchLaterQueueAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWatchLaterQueueAlt1QueryParams;

  @SpeakeasyMetadata()
  security: GetWatchLaterQueueAlt1Security;
}


export class GetWatchLaterQueueAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
