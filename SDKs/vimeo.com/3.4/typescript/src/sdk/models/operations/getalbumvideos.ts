import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlbumVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetAlbumVideosDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetAlbumVideosFilterEnum {
    Embeddable = "embeddable"
}

export enum GetAlbumVideosSortEnum {
    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Default = "default"
,    Duration = "duration"
,    Likes = "likes"
,    Manual = "manual"
,    ModifiedTime = "modified_time"
,    Plays = "plays"
}


export class GetAlbumVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetAlbumVideosDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetAlbumVideosFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=password" })
  password?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAlbumVideosSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weak_search" })
  weakSearch?: boolean;
}


export class GetAlbumVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlbumVideosPathParams;

  @Metadata()
  queryParams: GetAlbumVideosQueryParams;
}


export class GetAlbumVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
