import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchVideosDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum SearchVideosFilterEnum {
    Cc = "CC"
,    CcBy = "CC-BY"
,    CcByNc = "CC-BY-NC"
,    CcByNcNd = "CC-BY-NC-ND"
,    CcByNcSa = "CC-BY-NC-SA"
,    CcByNd = "CC-BY-ND"
,    CcBySa = "CC-BY-SA"
,    Cc0 = "CC0"
,    Categories = "categories"
,    Duration = "duration"
,    InProgress = "in-progress"
,    MinimumLikes = "minimum_likes"
,    Trending = "trending"
,    UploadDate = "upload_date"
}

export enum SearchVideosSortEnum {
    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Duration = "duration"
,    Likes = "likes"
,    Plays = "plays"
,    Relevant = "relevant"
}


export class SearchVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: SearchVideosDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: SearchVideosFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=links" })
  links?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchVideosSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris?: string;
}


export class SearchVideosRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchVideosQueryParams;
}


export class SearchVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
