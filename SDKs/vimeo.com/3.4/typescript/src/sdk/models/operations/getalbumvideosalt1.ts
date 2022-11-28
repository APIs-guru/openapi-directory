import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlbumVideosAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;
}

export enum GetAlbumVideosAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetAlbumVideosAlt1FilterEnum {
    Embeddable = "embeddable"
}

export enum GetAlbumVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Duration = "duration",
    Likes = "likes",
    Manual = "manual",
    ModifiedTime = "modified_time",
    Plays = "plays"
}


export class GetAlbumVideosAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containing_uri" })
  containingUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetAlbumVideosAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetAlbumVideosAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAlbumVideosAlt1SortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weak_search" })
  weakSearch?: boolean;
}


export class GetAlbumVideosAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlbumVideosAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetAlbumVideosAlt1QueryParams;
}


export class GetAlbumVideosAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
