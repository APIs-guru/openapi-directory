import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Institution } from "./institution";

export enum TransactionAccountTypeEnum {
    Bank = "bank"
,    Credits = "credits"
,    Cash = "cash"
,    Stocks = "stocks"
,    Mortgage = "mortgage"
,    Loans = "loans"
,    Vehicle = "vehicle"
,    Property = "property"
,    Insurance = "insurance"
,    OtherLiability = "other_liability"
}


export class TransactionAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @Metadata({ data: "json, name=current_balance" })
  currentBalance?: number;

  @Metadata({ data: "json, name=current_balance_date" })
  currentBalanceDate?: string;

  @Metadata({ data: "json, name=current_balance_exchange_rate" })
  currentBalanceExchangeRate?: number;

  @Metadata({ data: "json, name=current_balance_in_base_currency" })
  currentBalanceInBaseCurrency?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=institution" })
  institution?: Institution;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=safe_balance" })
  safeBalance?: number;

  @Metadata({ data: "json, name=safe_balance_in_base_currency" })
  safeBalanceInBaseCurrency?: number;

  @Metadata({ data: "json, name=starting_balance" })
  startingBalance?: number;

  @Metadata({ data: "json, name=starting_balance_date" })
  startingBalanceDate?: string;

  @Metadata({ data: "json, name=type" })
  type?: TransactionAccountTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
