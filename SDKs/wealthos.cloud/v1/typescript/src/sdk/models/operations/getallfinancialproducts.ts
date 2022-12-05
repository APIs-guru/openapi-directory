import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllFinancialProductsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_types" })
  productTypes?: string;
}


export class GetAllFinancialProductsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetAllFinancialProductsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}

export enum GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum {
    Yes = "YES",
    No = "NO"
}


export class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interest_accrual_basis" })
  interestAccrualBasis?: string;

  @SpeakeasyMetadata({ data: "json, name=interest_payment_frequency" })
  interestPaymentFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=pay_interest" })
  payInterest?: string;
}


export class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minimum_one_off_investment" })
  minimumOneOffInvestment?: string;

  @SpeakeasyMetadata({ data: "json, name=minimum_regular_monthly_investment" })
  minimumRegularMonthlyInvestment?: string;

  @SpeakeasyMetadata({ data: "json, name=regular_investment_dates" })
  regularInvestmentDates?: string[];

  @SpeakeasyMetadata({ data: "json, name=regular_investment_frequencies" })
  regularInvestmentFrequencies?: string[];
}


export class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minimum_one_off_withdrawal" })
  minimumOneOffWithdrawal?: string;

  @SpeakeasyMetadata({ data: "json, name=minimum_regular_monthly_withdrawal" })
  minimumRegularMonthlyWithdrawal?: string;

  @SpeakeasyMetadata({ data: "json, name=regular_withdrawal_frequencies" })
  regularWithdrawalFrequencies?: string[];

  @SpeakeasyMetadata({ data: "json, name=regular_withdrawal_payment_dates" })
  regularWithdrawalPaymentDates?: string[];
}


export class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional_cash_currencies" })
  additionalCashCurrencies?: string[];

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: string[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=dividend_options" })
  dividendOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=financial_product_id" })
  financialProductId: string;

  @SpeakeasyMetadata({ data: "json, name=flexible" })
  flexible?: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum;

  @SpeakeasyMetadata({ data: "json, name=interest_preferences" })
  interestPreferences?: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences;

  @SpeakeasyMetadata({ data: "json, name=investment_preferences" })
  investmentPreferences?: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=withdrawal_preferences" })
  withdrawalPreferences?: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences;
}


export class GetAllFinancialProducts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=financial_products", elemType: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts })
  financialProducts: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts[];
}


export class GetAllFinancialProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllFinancialProductsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAllFinancialProductsHeaders;

  @SpeakeasyMetadata()
  security: GetAllFinancialProductsSecurity;
}


export class GetAllFinancialProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllFinancialProducts200ApplicationJsonObject?: GetAllFinancialProducts200ApplicationJson;

  @SpeakeasyMetadata()
  getAllFinancialProducts400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllFinancialProducts401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllFinancialProducts403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllFinancialProducts404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllFinancialProducts429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllFinancialProducts500ApplicationJsonAny?: any;
}
