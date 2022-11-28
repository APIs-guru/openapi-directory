import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EntryApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}


export class EntryApiGetNamesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: EntryApiGetNamesNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class EntryApiGetNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EntryApiGetNamesQueryParams;
}


export class EntryApiGetNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entryApiGetNames200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  entryApiGetNames200ApplicationJsonpStrings?: string[];

  @SpeakeasyMetadata()
  entryApiGetNames200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
