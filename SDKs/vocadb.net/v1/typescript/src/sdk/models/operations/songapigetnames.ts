import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SongApiGetNamesNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}


export class SongApiGetNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongApiGetNamesNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class SongApiGetNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SongApiGetNamesQueryParams;
}


export class SongApiGetNamesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  songApiGetNames200ApplicationJsonStrings?: string[];

  @Metadata()
  songApiGetNames200ApplicationJsonpStrings?: string[];

  @Metadata()
  songApiGetNames200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
