import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPhrasesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetPhrasesUseCanonicalEnum {
    False = "false"
,    True = "true"
}


export class GetPhrasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetPhrasesUseCanonicalEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=wlmi" })
  wlmi?: number;
}


export class GetPhrasesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPhrasesPathParams;

  @Metadata()
  queryParams: GetPhrasesQueryParams;
}


export class GetPhrasesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
