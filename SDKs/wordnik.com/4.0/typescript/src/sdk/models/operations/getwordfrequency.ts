import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWordFrequencyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetWordFrequencyUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetWordFrequencyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endYear" })
  endYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startYear" })
  startYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetWordFrequencyUseCanonicalEnum;
}


export class GetWordFrequencyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWordFrequencyPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWordFrequencyQueryParams;
}


export class GetWordFrequencyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
