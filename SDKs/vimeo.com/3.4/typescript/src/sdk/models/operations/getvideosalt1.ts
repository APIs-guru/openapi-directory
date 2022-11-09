import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetVideosAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVideosAlt1FilterEnum {
    AppOnly = "app_only"
,    Embeddable = "embeddable"
,    Featured = "featured"
,    Playable = "playable"
}

export enum GetVideosAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Default = "default"
,    Duration = "duration"
,    LastUserActionEventDate = "last_user_action_event_date"
,    Likes = "likes"
,    ModifiedTime = "modified_time"
,    Plays = "plays"
}


export class GetVideosAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideosAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVideosAlt1FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_playable" })
  filterPlayable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideosAlt1SortEnum;
}


export class GetVideosAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVideosAlt1QueryParams;
}


export class GetVideosAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
