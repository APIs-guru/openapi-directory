import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SaveAccountTypeEnum {
    Checking = "checking",
    Savings = "savings",
    CreditCard = "creditCard",
    Cash = "cash",
    LineOfCredit = "lineOfCredit",
    OtherAsset = "otherAsset",
    OtherLiability = "otherLiability"
}
export declare class SaveAccount extends SpeakeasyBase {
    balance: number;
    name: string;
    type: SaveAccountTypeEnum;
}
