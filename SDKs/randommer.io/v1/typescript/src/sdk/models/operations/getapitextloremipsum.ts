import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiTextLoremIpsumQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=loremType" })
  loremType: shared.LoremTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: shared.TextTypeEnum;
}


export class GetApiTextLoremIpsumHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiTextLoremIpsumRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiTextLoremIpsumQueryParams;

  @Metadata()
  headers: GetApiTextLoremIpsumHeaders;
}


export class GetApiTextLoremIpsumResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
