import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEtymologiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetEtymologiesUseCanonicalEnum {
    False = "false"
,    True = "true"
}


export class GetEtymologiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetEtymologiesUseCanonicalEnum;
}


export class GetEtymologiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEtymologiesPathParams;

  @Metadata()
  queryParams: GetEtymologiesQueryParams;
}


export class GetEtymologiesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
