import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nameType" })
  nameType: shared.NameTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quantity" })
  quantity: number;
}


export class GetApiNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiNameQueryParams;

  @Metadata()
  headers: GetApiNameHeaders;
}


export class GetApiNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
