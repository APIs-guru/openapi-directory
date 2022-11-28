import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScenarioTypeEnum {
    NoInterest = "no-interest",
    Savings = "savings",
    Debt = "debt"
}
export declare class Scenario extends SpeakeasyBase {
    achieveDate?: string;
    closingBalance?: number;
    closingBalanceDate?: string;
    createdAt?: string;
    currentBalance?: number;
    currentBalanceDate?: string;
    currentBalanceExchangeRate?: number;
    currentBalanceInBaseCurrency?: number;
    description?: string;
    id?: number;
    interestRate?: number;
    interestRateRepeatId?: number;
    maximumValue?: number;
    minimumValue?: number;
    safeBalance?: number;
    safeBalanceInBaseCurrency?: number;
    startingBalance?: number;
    startingBalanceDate?: string;
    title?: string;
    type?: ScenarioTypeEnum;
    updatedAt?: string;
}
