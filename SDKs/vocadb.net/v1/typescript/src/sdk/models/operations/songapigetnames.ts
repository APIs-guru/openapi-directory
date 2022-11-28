import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SongApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}


export class SongApiGetNamesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongApiGetNamesNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class SongApiGetNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SongApiGetNamesQueryParams;
}


export class SongApiGetNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  songApiGetNames200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  songApiGetNames200ApplicationJsonpStrings?: string[];

  @SpeakeasyMetadata()
  songApiGetNames200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
