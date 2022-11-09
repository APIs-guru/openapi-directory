import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}

export enum GetChannelVideosDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetChannelVideosFilterEnum {
    Embeddable = "embeddable"
}

export enum GetChannelVideosSortEnum {
    Added = "added"
,    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Default = "default"
,    Duration = "duration"
,    Likes = "likes"
,    Manual = "manual"
,    ModifiedTime = "modified_time"
,    Plays = "plays"
}


export class GetChannelVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelVideosDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetChannelVideosFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelVideosSortEnum;
}


export class GetChannelVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChannelVideosPathParams;

  @Metadata()
  queryParams: GetChannelVideosQueryParams;
}


export class GetChannelVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
