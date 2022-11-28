import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPhrasesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetPhrasesUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetPhrasesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetPhrasesUseCanonicalEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wlmi" })
  wlmi?: number;
}


export class GetPhrasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPhrasesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPhrasesQueryParams;
}


export class GetPhrasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
