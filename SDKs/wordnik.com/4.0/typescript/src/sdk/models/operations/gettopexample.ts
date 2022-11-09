import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTopExamplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetTopExampleUseCanonicalEnum {
    False = "false"
,    True = "true"
}


export class GetTopExampleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetTopExampleUseCanonicalEnum;
}


export class GetTopExampleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTopExamplePathParams;

  @Metadata()
  queryParams: GetTopExampleQueryParams;
}


export class GetTopExampleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
