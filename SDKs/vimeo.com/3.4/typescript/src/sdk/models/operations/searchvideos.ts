import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum SearchVideosFilterEnum {
    Cc = "CC",
    CcBy = "CC-BY",
    CcByNc = "CC-BY-NC",
    CcByNcNd = "CC-BY-NC-ND",
    CcByNcSa = "CC-BY-NC-SA",
    CcByNd = "CC-BY-ND",
    CcBySa = "CC-BY-SA",
    Cc0 = "CC0",
    Categories = "categories",
    Duration = "duration",
    InProgress = "in-progress",
    MinimumLikes = "minimum_likes",
    Trending = "trending",
    UploadDate = "upload_date"
}

export enum SearchVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays",
    Relevant = "relevant"
}


export class SearchVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: SearchVideosDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: SearchVideosFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=links" })
  links?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchVideosSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris?: string;
}


export class SearchVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchVideosQueryParams;
}


export class SearchVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
