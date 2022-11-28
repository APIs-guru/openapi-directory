import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SaveAccountTypeEnum {
    Checking = "checking",
    Savings = "savings",
    CreditCard = "creditCard",
    Cash = "cash",
    LineOfCredit = "lineOfCredit",
    OtherAsset = "otherAsset",
    OtherLiability = "otherLiability"
}


export class SaveAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: SaveAccountTypeEnum;
}
