import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameType" })
  nameType: shared.NameTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quantity" })
  quantity: number;
}


export class GetApiNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiNameQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiNameHeaders;
}


export class GetApiNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
