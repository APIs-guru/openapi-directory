import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagApiGetNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allowAliases" })
  allowAliases?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class TagApiGetNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TagApiGetNamesQueryParams;
}


export class TagApiGetNamesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagApiGetNames200ApplicationJsonStrings?: string[];

  @Metadata()
  tagApiGetNames200ApplicationJsonpStrings?: string[];

  @Metadata()
  tagApiGetNames200TextJsonStrings?: string[];
}
