import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWordOfTheDayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetWordOfTheDayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWordOfTheDayQueryParams;
}


export class GetWordOfTheDayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
