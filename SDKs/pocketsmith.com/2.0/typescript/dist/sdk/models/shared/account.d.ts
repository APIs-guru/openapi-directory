import { SpeakeasyBase } from "../../../internal/utils";
import { Scenario } from "./scenario";
import { TransactionAccount } from "./transactionaccount";
export declare enum AccountTypeEnum {
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
export declare class Account extends SpeakeasyBase {
    createdAt?: string;
    currencyCode?: string;
    currentBalance?: number;
    currentBalanceDate?: string;
    currentBalanceExchangeRate?: number;
    currentBalanceInBaseCurrency?: number;
    id?: number;
    isNetWorth?: boolean;
    primaryScenario?: Scenario;
    primaryTransactionAccount?: TransactionAccount;
    safeBalance?: number;
    safeBalanceInBaseCurrency?: number;
    scenarios?: Scenario[];
    title?: string;
    transactionAccounts?: TransactionAccount[];
    type?: AccountTypeEnum;
    updatedAt?: string;
}
