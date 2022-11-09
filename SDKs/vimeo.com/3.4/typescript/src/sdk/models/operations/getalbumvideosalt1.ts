import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlbumVideosAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;
}

export enum GetAlbumVideosAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetAlbumVideosAlt1FilterEnum {
    Embeddable = "embeddable"
}

export enum GetAlbumVideosAlt1SortEnum {
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


export class GetAlbumVideosAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetAlbumVideosAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetAlbumVideosAlt1FilterEnum;

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
  sort?: GetAlbumVideosAlt1SortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weak_search" })
  weakSearch?: boolean;
}


export class GetAlbumVideosAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlbumVideosAlt1PathParams;

  @Metadata()
  queryParams: GetAlbumVideosAlt1QueryParams;
}


export class GetAlbumVideosAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
