import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetInvestmentProductCategoryIdEnum {
    Funds = "funds"
}


export class GetInvestmentProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: GetInvestmentProductCategoryIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investment_product_id" })
  investmentProductId: string;
}


export class GetInvestmentProductHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetInvestmentProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetInvestmentProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvestmentProductPathParams;

  @SpeakeasyMetadata()
  headers: GetInvestmentProductHeaders;

  @SpeakeasyMetadata()
  security: GetInvestmentProductSecurity;
}


export class GetInvestmentProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInvestmentProduct200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct500ApplicationJsonAny?: any;
}
