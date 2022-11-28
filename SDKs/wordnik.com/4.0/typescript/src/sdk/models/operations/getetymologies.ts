import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEtymologiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetEtymologiesUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetEtymologiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetEtymologiesUseCanonicalEnum;
}


export class GetEtymologiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEtymologiesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEtymologiesQueryParams;
}


export class GetEtymologiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
