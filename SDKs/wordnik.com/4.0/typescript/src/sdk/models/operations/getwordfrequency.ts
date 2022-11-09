import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWordFrequencyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetWordFrequencyUseCanonicalEnum {
    False = "false"
,    True = "true"
}


export class GetWordFrequencyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endYear" })
  endYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startYear" })
  startYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetWordFrequencyUseCanonicalEnum;
}


export class GetWordFrequencyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWordFrequencyPathParams;

  @Metadata()
  queryParams: GetWordFrequencyQueryParams;
}


export class GetWordFrequencyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
