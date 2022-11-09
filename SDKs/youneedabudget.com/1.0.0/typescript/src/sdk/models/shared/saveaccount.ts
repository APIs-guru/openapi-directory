import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SaveAccountTypeEnum {
    Checking = "checking"
,    Savings = "savings"
,    CreditCard = "creditCard"
,    Cash = "cash"
,    LineOfCredit = "lineOfCredit"
,    OtherAsset = "otherAsset"
,    OtherLiability = "otherLiability"
}


export class SaveAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: SaveAccountTypeEnum;
}
