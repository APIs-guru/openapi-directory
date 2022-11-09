import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAppearancesAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetAppearancesAlt1FilterEnum {
    Embeddable = "embeddable"
}

export enum GetAppearancesAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Comments = "comments"
,    Date = "date"
,    Duration = "duration"
,    Likes = "likes"
,    Plays = "plays"
}


export class GetAppearancesAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetAppearancesAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetAppearancesAlt1FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_embeddable" })
  filterEmbeddable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAppearancesAlt1SortEnum;
}


export class GetAppearancesAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAppearancesAlt1QueryParams;
}


export class GetAppearancesAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
