import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAppearancesAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetAppearancesAlt1FilterEnum {
    Embeddable = "embeddable"
}

export enum GetAppearancesAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}


export class GetAppearancesAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetAppearancesAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetAppearancesAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAppearancesAlt1SortEnum;
}


export class GetAppearancesAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAppearancesAlt1QueryParams;
}


export class GetAppearancesAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
