import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MoneyObject } from "./moneyobject";


export class AccountResourceAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountType" })
  accountType: any;

  @Metadata({ data: "json, name=balance" })
  balance: MoneyObject;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=displayName" })
  displayName: string;
}


export class AccountResourceLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self: string;
}


export class AccountResourceRelationshipsTransactionsLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class AccountResourceRelationshipsTransactions extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: AccountResourceRelationshipsTransactionsLinks;
}


export class AccountResourceRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactions" })
  transactions: AccountResourceRelationshipsTransactions;
}


// AccountResource
/** 
 * Provides information about an Up bank account.
 * 
**/
export class AccountResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: AccountResourceAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links?: AccountResourceLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: AccountResourceRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}
