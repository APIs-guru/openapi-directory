import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AlbumApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}


export class AlbumApiGetNamesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: AlbumApiGetNamesNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class AlbumApiGetNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AlbumApiGetNamesQueryParams;
}


export class AlbumApiGetNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  albumApiGetNames200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  albumApiGetNames200ApplicationJsonpStrings?: string[];

  @SpeakeasyMetadata()
  albumApiGetNames200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
