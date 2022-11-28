import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTopExamplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetTopExampleUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetTopExampleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetTopExampleUseCanonicalEnum;
}


export class GetTopExampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTopExamplePathParams;

  @SpeakeasyMetadata()
  queryParams: GetTopExampleQueryParams;
}


export class GetTopExampleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
