import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiTextLoremIpsumQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=loremType" })
  loremType: shared.LoremTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: shared.TextTypeEnum;
}


export class GetApiTextLoremIpsumHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiTextLoremIpsumRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiTextLoremIpsumQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiTextLoremIpsumHeaders;
}


export class GetApiTextLoremIpsumResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
