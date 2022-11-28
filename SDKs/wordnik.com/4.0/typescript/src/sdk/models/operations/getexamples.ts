import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExamplesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetExamplesIncludeDuplicatesEnum {
    False = "false",
    True = "true"
}

export enum GetExamplesUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetExamplesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDuplicates" })
  includeDuplicates?: GetExamplesIncludeDuplicatesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetExamplesUseCanonicalEnum;
}


export class GetExamplesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExamplesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetExamplesQueryParams;
}


export class GetExamplesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
