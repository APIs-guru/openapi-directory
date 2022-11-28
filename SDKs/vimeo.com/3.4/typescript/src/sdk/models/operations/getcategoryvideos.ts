import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoryVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}

export enum GetCategoryVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetCategoryVideosFilterEnum {
    ConditionalFeatured = "conditional_featured",
    Embeddable = "embeddable"
}

export enum GetCategoryVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Featured = "featured",
    Likes = "likes",
    Plays = "plays",
    Relevant = "relevant"
}


export class GetCategoryVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategoryVideosDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetCategoryVideosFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategoryVideosSortEnum;
}


export class GetCategoryVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoryVideosPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCategoryVideosQueryParams;
}


export class GetCategoryVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
