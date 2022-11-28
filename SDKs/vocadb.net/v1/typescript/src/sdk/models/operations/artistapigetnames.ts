import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ArtistApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}


export class ArtistApiGetNamesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: ArtistApiGetNamesNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class ArtistApiGetNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ArtistApiGetNamesQueryParams;
}


export class ArtistApiGetNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artistApiGetNames200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  artistApiGetNames200ApplicationJsonpStrings?: string[];

  @SpeakeasyMetadata()
  artistApiGetNames200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
