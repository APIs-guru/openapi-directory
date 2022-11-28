import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReleaseEventApiGetNamesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class ReleaseEventApiGetNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReleaseEventApiGetNamesQueryParams;
}


export class ReleaseEventApiGetNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  releaseEventApiGetNames200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  releaseEventApiGetNames200ApplicationJsonpStrings?: string[];

  @SpeakeasyMetadata()
  releaseEventApiGetNames200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
