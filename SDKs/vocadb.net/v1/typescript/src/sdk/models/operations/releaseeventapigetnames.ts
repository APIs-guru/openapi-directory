import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReleaseEventApiGetNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class ReleaseEventApiGetNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReleaseEventApiGetNamesQueryParams;
}


export class ReleaseEventApiGetNamesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  releaseEventApiGetNames200ApplicationJsonStrings?: string[];

  @Metadata()
  releaseEventApiGetNames200ApplicationJsonpStrings?: string[];

  @Metadata()
  releaseEventApiGetNames200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
