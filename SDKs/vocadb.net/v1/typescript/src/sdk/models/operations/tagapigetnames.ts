import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagApiGetNamesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAliases" })
  allowAliases?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class TagApiGetNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TagApiGetNamesQueryParams;
}


export class TagApiGetNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagApiGetNames200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  tagApiGetNames200ApplicationJsonpStrings?: string[];

  @SpeakeasyMetadata()
  tagApiGetNames200TextJsonStrings?: string[];
}
