import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetConfiguredInvestmentProductPricesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class GetConfiguredInvestmentProductPricesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetConfiguredInvestmentProductPricesStatusEnum;
}


export class GetConfiguredInvestmentProductPricesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetConfiguredInvestmentProductPricesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetConfiguredInvestmentProductPrices200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=investment_product_unit_prices" })
  investmentProductUnitPrices: any[];

  @SpeakeasyMetadata({ data: "json, name=next_page_available" })
  nextPageAvailable: boolean;
}


export class GetConfiguredInvestmentProductPricesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConfiguredInvestmentProductPricesQueryParams;

  @SpeakeasyMetadata()
  headers: GetConfiguredInvestmentProductPricesHeaders;

  @SpeakeasyMetadata()
  security: GetConfiguredInvestmentProductPricesSecurity;
}


export class GetConfiguredInvestmentProductPricesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProductPrices200ApplicationJsonObject?: GetConfiguredInvestmentProductPrices200ApplicationJson;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProductPrices401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProductPrices403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProductPrices404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProductPrices429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getConfiguredInvestmentProductPrices500ApplicationJsonAny?: any;
}
