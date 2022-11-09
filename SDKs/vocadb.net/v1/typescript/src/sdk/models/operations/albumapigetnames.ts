import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AlbumApiGetNamesNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}


export class AlbumApiGetNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: AlbumApiGetNamesNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class AlbumApiGetNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AlbumApiGetNamesQueryParams;
}


export class AlbumApiGetNamesResponse extends SpeakeasyBase {
  @Metadata()
  albumApiGetNames200ApplicationJsonStrings?: string[];

  @Metadata()
  albumApiGetNames200ApplicationJsonpStrings?: string[];

  @Metadata()
  albumApiGetNames200TextJsonStrings?: string[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
