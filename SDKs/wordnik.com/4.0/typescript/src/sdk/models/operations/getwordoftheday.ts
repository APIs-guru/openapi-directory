import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWordOfTheDayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetWordOfTheDayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWordOfTheDayQueryParams;
}


export class GetWordOfTheDayResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
