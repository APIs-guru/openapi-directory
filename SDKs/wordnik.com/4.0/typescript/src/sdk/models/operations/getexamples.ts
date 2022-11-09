import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExamplesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetExamplesIncludeDuplicatesEnum {
    False = "false"
,    True = "true"
}

export enum GetExamplesUseCanonicalEnum {
    False = "false"
,    True = "true"
}


export class GetExamplesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDuplicates" })
  includeDuplicates?: GetExamplesIncludeDuplicatesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetExamplesUseCanonicalEnum;
}


export class GetExamplesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExamplesPathParams;

  @Metadata()
  queryParams: GetExamplesQueryParams;
}


export class GetExamplesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
