import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetLikesAlt1FilterEnum {
    Embeddable = "embeddable"
}

export enum GetLikesAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}


export class GetLikesAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetLikesAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetLikesAlt1SortEnum;
}


export class GetLikesAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLikesAlt1QueryParams;
}


export class GetLikesAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
