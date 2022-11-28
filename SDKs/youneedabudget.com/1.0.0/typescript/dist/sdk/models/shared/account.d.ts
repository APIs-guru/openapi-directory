import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountTypeEnum {
    Checking = "checking",
    Savings = "savings",
    Cash = "cash",
    CreditCard = "creditCard",
    LineOfCredit = "lineOfCredit",
    OtherAsset = "otherAsset",
    OtherLiability = "otherLiability",
    PayPal = "payPal",
    MerchantAccount = "merchantAccount",
    InvestmentAccount = "investmentAccount",
    Mortgage = "mortgage"
}
export declare class Account extends SpeakeasyBase {
    balance: number;
    clearedBalance: number;
    closed: boolean;
    deleted: boolean;
    directImportInError?: boolean;
    directImportLinked?: boolean;
    id: string;
    name: string;
    note?: string;
    onBudget: boolean;
    transferPayeeId: string;
    type: AccountTypeEnum;
    unclearedBalance: number;
}
