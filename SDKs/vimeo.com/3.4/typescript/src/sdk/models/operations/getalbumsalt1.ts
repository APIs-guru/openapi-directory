import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAlbumsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetAlbumsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Duration = "duration",
    Videos = "videos"
}


export class GetAlbumsAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetAlbumsAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAlbumsAlt1SortEnum;
}


export class GetAlbumsAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAlbumsAlt1QueryParams;
}


export class GetAlbumsAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Album })
  albums?: shared.Album[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
