import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetVideosDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVideosFilterEnum {
    AppOnly = "app_only"
,    Embeddable = "embeddable"
,    Featured = "featured"
,    Playable = "playable"
}

export enum GetVideosSortEnum {
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


export class GetVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVideosDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVideosFilterEnum;

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
  sort?: GetVideosSortEnum;
}


export class GetVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideosPathParams;

  @Metadata()
  queryParams: GetVideosQueryParams;
}


export class GetVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
