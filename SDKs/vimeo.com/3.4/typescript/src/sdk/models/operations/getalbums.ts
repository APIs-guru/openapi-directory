import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlbumsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetAlbumsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetAlbumsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Duration = "duration"
,    Videos = "videos"
}


export class GetAlbumsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetAlbumsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAlbumsSortEnum;
}


export class GetAlbumsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAlbumsPathParams;

  @Metadata()
  queryParams: GetAlbumsQueryParams;
}


export class GetAlbumsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Album })
  albums?: shared.Album[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
