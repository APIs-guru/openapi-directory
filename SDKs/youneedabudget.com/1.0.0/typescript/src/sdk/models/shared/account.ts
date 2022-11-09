import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountTypeEnum {
    Checking = "checking"
,    Savings = "savings"
,    Cash = "cash"
,    CreditCard = "creditCard"
,    LineOfCredit = "lineOfCredit"
,    OtherAsset = "otherAsset"
,    OtherLiability = "otherLiability"
,    PayPal = "payPal"
,    MerchantAccount = "merchantAccount"
,    InvestmentAccount = "investmentAccount"
,    Mortgage = "mortgage"
}


export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance: number;

  @Metadata({ data: "json, name=cleared_balance" })
  clearedBalance: number;

  @Metadata({ data: "json, name=closed" })
  closed: boolean;

  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=direct_import_in_error" })
  directImportInError?: boolean;

  @Metadata({ data: "json, name=direct_import_linked" })
  directImportLinked?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=on_budget" })
  onBudget: boolean;

  @Metadata({ data: "json, name=transfer_payee_id" })
  transferPayeeId: string;

  @Metadata({ data: "json, name=type" })
  type: AccountTypeEnum;

  @Metadata({ data: "json, name=uncleared_balance" })
  unclearedBalance: number;
}
