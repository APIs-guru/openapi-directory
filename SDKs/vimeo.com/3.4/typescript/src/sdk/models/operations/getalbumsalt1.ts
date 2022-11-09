import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAlbumsAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetAlbumsAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Duration = "duration"
,    Videos = "videos"
}


export class GetAlbumsAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetAlbumsAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAlbumsAlt1SortEnum;
}


export class GetAlbumsAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAlbumsAlt1QueryParams;
}


export class GetAlbumsAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Album })
  albums?: shared.Album[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
