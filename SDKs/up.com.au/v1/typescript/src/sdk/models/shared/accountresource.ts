import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MoneyObject } from "./moneyobject";



export class AccountResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType: any;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: MoneyObject;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;
}


export class AccountResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


export class AccountResourceRelationshipsTransactionsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class AccountResourceRelationshipsTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: AccountResourceRelationshipsTransactionsLinks;
}


export class AccountResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactions" })
  transactions: AccountResourceRelationshipsTransactions;
}


// AccountResource
/** 
 * Provides information about an Up bank account.
 * 
**/
export class AccountResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: AccountResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: AccountResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: AccountResourceRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
