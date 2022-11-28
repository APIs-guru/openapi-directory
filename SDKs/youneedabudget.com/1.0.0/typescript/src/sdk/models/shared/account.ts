import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountTypeEnum {
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


export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=cleared_balance" })
  clearedBalance: number;

  @SpeakeasyMetadata({ data: "json, name=closed" })
  closed: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=direct_import_in_error" })
  directImportInError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=direct_import_linked" })
  directImportLinked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=on_budget" })
  onBudget: boolean;

  @SpeakeasyMetadata({ data: "json, name=transfer_payee_id" })
  transferPayeeId: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uncleared_balance" })
  unclearedBalance: number;
}
