import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ArtistApiGetNamesNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}


export class ArtistApiGetNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: ArtistApiGetNamesNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class ArtistApiGetNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ArtistApiGetNamesQueryParams;
}


export class ArtistApiGetNamesResponse extends SpeakeasyBase {
  @Metadata()
  artistApiGetNames200ApplicationJsonStrings?: string[];

  @Metadata()
  artistApiGetNames200ApplicationJsonpStrings?: string[];

  @Metadata()
  artistApiGetNames200TextJsonStrings?: string[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
