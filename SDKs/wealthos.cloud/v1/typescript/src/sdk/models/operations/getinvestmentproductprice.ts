import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetInvestmentProductPriceCategoryIdEnum {
    Funds = "funds"
}


export class GetInvestmentProductPricePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: GetInvestmentProductPriceCategoryIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investment_product_id" })
  investmentProductId: string;
}


export class GetInvestmentProductPriceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetInvestmentProductPriceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetInvestmentProductPriceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvestmentProductPricePathParams;

  @SpeakeasyMetadata()
  headers: GetInvestmentProductPriceHeaders;

  @SpeakeasyMetadata()
  security: GetInvestmentProductPriceSecurity;
}


export class GetInvestmentProductPriceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInvestmentProductPrice200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProductPrice401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProductPrice403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProductPrice404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProductPrice429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProductPrice500ApplicationJsonAny?: any;
}
