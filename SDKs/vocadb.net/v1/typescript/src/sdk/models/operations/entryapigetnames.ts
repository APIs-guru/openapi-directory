import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EntryApiGetNamesNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}


export class EntryApiGetNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: EntryApiGetNamesNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class EntryApiGetNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EntryApiGetNamesQueryParams;
}


export class EntryApiGetNamesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  entryApiGetNames200ApplicationJsonStrings?: string[];

  @Metadata()
  entryApiGetNames200ApplicationJsonpStrings?: string[];

  @Metadata()
  entryApiGetNames200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
