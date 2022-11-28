import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlbumsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetAlbumsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetAlbumsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Duration = "duration",
    Videos = "videos"
}


export class GetAlbumsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetAlbumsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAlbumsSortEnum;
}


export class GetAlbumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlbumsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAlbumsQueryParams;
}


export class GetAlbumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Album })
  albums?: shared.Album[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
