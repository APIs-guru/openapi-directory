import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoryVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}

export enum GetCategoryVideosDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetCategoryVideosFilterEnum {
    ConditionalFeatured = "conditional_featured"
,    Embeddable = "embeddable"
}

export enum GetCategoryVideosSortEnum {
    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Duration = "duration"
,    Featured = "featured"
,    Likes = "likes"
,    Plays = "plays"
,    Relevant = "relevant"
}


export class GetCategoryVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategoryVideosDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetCategoryVideosFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategoryVideosSortEnum;
}


export class GetCategoryVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoryVideosPathParams;

  @Metadata()
  queryParams: GetCategoryVideosQueryParams;
}


export class GetCategoryVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
