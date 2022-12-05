import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetConfiguredInvestmentProductsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class GetConfiguredInvestmentProductsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetConfiguredInvestmentProductsStatusEnum;
}


export class GetConfiguredInvestmentProductsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetConfiguredInvestmentProductsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetConfiguredInvestmentProducts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=investment_products" })
  investmentProducts: any[];

  @SpeakeasyMetadata({ data: "json, name=next_page_available" })
  nextPageAvailable: boolean;
}


export class GetConfiguredInvestmentProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConfiguredInvestmentProductsQueryParams;

  @SpeakeasyMetadata()
  headers: GetConfiguredInvestmentProductsHeaders;

  @SpeakeasyMetadata()
  security: GetConfiguredInvestmentProductsSecurity;
}


export class GetConfiguredInvestmentProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProducts200ApplicationJsonObject?: GetConfiguredInvestmentProducts200ApplicationJson;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProducts401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProducts403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProducts404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProducts429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProducts500ApplicationJsonAny?: any;
}
