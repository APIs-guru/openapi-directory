import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Scenario } from "./scenario";
import { TransactionAccount } from "./transactionaccount";
import { Scenario } from "./scenario";
import { TransactionAccount } from "./transactionaccount";

export enum AccountTypeEnum {
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


export class Account extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=is_net_worth" })
  isNetWorth?: boolean;

  @Metadata({ data: "json, name=primary_scenario" })
  primaryScenario?: Scenario;

  @Metadata({ data: "json, name=primary_transaction_account" })
  primaryTransactionAccount?: TransactionAccount;

  @Metadata({ data: "json, name=safe_balance" })
  safeBalance?: number;

  @Metadata({ data: "json, name=safe_balance_in_base_currency" })
  safeBalanceInBaseCurrency?: number;

  @Metadata({ data: "json, name=scenarios", elemType: shared.Scenario })
  scenarios?: Scenario[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=transaction_accounts", elemType: shared.TransactionAccount })
  transactionAccounts?: TransactionAccount[];

  @Metadata({ data: "json, name=type" })
  type?: AccountTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
