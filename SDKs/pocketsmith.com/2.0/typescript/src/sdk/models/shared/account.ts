import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Scenario } from "./scenario";
import { TransactionAccount } from "./transactionaccount";


export enum AccountTypeEnum {
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


export class Account extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=is_net_worth" })
  isNetWorth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=primary_scenario" })
  primaryScenario?: Scenario;

  @SpeakeasyMetadata({ data: "json, name=primary_transaction_account" })
  primaryTransactionAccount?: TransactionAccount;

  @SpeakeasyMetadata({ data: "json, name=safe_balance" })
  safeBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=safe_balance_in_base_currency" })
  safeBalanceInBaseCurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=scenarios", elemType: Scenario })
  scenarios?: Scenario[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_accounts", elemType: TransactionAccount })
  transactionAccounts?: TransactionAccount[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
