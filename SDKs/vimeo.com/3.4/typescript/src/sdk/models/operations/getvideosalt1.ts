import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetVideosAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVideosAlt1FilterEnum {
    AppOnly = "app_only",
    Embeddable = "embeddable",
    Featured = "featured",
    Playable = "playable"
}

export enum GetVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Duration = "duration",
    LastUserActionEventDate = "last_user_action_event_date",
    Likes = "likes",
    ModifiedTime = "modified_time",
    Plays = "plays"
}


export class GetVideosAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideosAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVideosAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_playable" })
  filterPlayable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideosAlt1SortEnum;
}


export class GetVideosAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVideosAlt1QueryParams;
}


export class GetVideosAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
