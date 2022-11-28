import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Institution } from "./institution";


export enum TransactionAccountTypeEnum {
    Bank = "bank",
    Credits = "credits",
    Cash = "cash",
    Stocks = "stocks",
    Mortgage = "mortgage",
    Loans = "loans",
    Vehicle = "vehicle",
    Property = "property",
    Insurance = "insurance",
    OtherLiability = "other_liability"
}


export class TransactionAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=current_balance" })
  currentBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=current_balance_date" })
  currentBalanceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=current_balance_exchange_rate" })
  currentBalanceExchangeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=current_balance_in_base_currency" })
  currentBalanceInBaseCurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution?: Institution;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=safe_balance" })
  safeBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=safe_balance_in_base_currency" })
  safeBalanceInBaseCurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=starting_balance" })
  startingBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=starting_balance_date" })
  startingBalanceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TransactionAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
