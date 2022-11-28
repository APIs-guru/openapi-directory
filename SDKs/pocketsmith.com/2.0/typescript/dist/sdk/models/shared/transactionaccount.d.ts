import { SpeakeasyBase } from "../../../internal/utils";
import { Institution } from "./institution";
export declare enum TransactionAccountTypeEnum {
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
export declare class TransactionAccount extends SpeakeasyBase {
    createdAt?: string;
    currencyCode?: string;
    currentBalance?: number;
    currentBalanceDate?: string;
    currentBalanceExchangeRate?: number;
    currentBalanceInBaseCurrency?: number;
    id?: number;
    institution?: Institution;
    name?: string;
    number?: string;
    safeBalance?: number;
    safeBalanceInBaseCurrency?: number;
    startingBalance?: number;
    startingBalanceDate?: string;
    type?: TransactionAccountTypeEnum;
    updatedAt?: string;
}
