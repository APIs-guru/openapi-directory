import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MoneyObject } from "./moneyobject";
import { MoneyObject } from "./moneyobject";
import { MoneyObject } from "./moneyobject";
import { MoneyObject } from "./moneyobject";


// TransactionResourceAttributesCashback
/** 
 * If all or part of this transaction was instantly reimbursed in the
 * form of cashback, details of the reimbursement.
 * 
**/
export class TransactionResourceAttributesCashback extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @Metadata({ data: "json, name=description" })
  description: string;
}


// TransactionResourceAttributesForeignAmount
/** 
 * The foreign currency amount of this transaction. This field will be
 * `null` for domestic transactions. The amount was converted to the AUD
 * amount reflected in the `amount` of this transaction. Refer to the
 * `holdInfo` field for the original `foreignAmount` the transaction was
 * `HELD` at.
 * 
**/
export class TransactionResourceAttributesForeignAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @Metadata({ data: "json, name=value" })
  value: string;

  @Metadata({ data: "json, name=valueInBaseUnits" })
  valueInBaseUnits: number;
}


// TransactionResourceAttributesHoldInfoForeignAmount
/** 
 * The foreign currency amount of this transaction while in the `HELD`
 * status. This field will be `null` for domestic transactions. The amount
 * was converted to the AUD amount reflected in the `amount` field.
 * 
**/
export class TransactionResourceAttributesHoldInfoForeignAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @Metadata({ data: "json, name=value" })
  value: string;

  @Metadata({ data: "json, name=valueInBaseUnits" })
  valueInBaseUnits: number;
}


// TransactionResourceAttributesHoldInfo
/** 
 * If this transaction is currently in the `HELD` status, or was ever in
 * the `HELD` status, the `amount` and `foreignAmount` of the
 * transaction while `HELD`.
 * 
**/
export class TransactionResourceAttributesHoldInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @Metadata({ data: "json, name=foreignAmount" })
  foreignAmount: TransactionResourceAttributesHoldInfoForeignAmount;
}


// TransactionResourceAttributesRoundUpBoostPortion
/** 
 * The portion of the Round Up `amount` owing to boosted Round Ups,
 * represented as a negative value. If no boost was added to the Round Up
 * this field will be `null`.
 * 
**/
export class TransactionResourceAttributesRoundUpBoostPortion extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @Metadata({ data: "json, name=value" })
  value: string;

  @Metadata({ data: "json, name=valueInBaseUnits" })
  valueInBaseUnits: number;
}


// TransactionResourceAttributesRoundUp
/** 
 * Details of how this transaction was rounded-up. If no Round Up was
 * applied this field will be `null`.
 * 
**/
export class TransactionResourceAttributesRoundUp extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @Metadata({ data: "json, name=boostPortion" })
  boostPortion: TransactionResourceAttributesRoundUpBoostPortion;
}


export class TransactionResourceAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @Metadata({ data: "json, name=cashback" })
  cashback: TransactionResourceAttributesCashback;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=foreignAmount" })
  foreignAmount: TransactionResourceAttributesForeignAmount;

  @Metadata({ data: "json, name=holdInfo" })
  holdInfo: TransactionResourceAttributesHoldInfo;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=rawText" })
  rawText: string;

  @Metadata({ data: "json, name=roundUp" })
  roundUp: TransactionResourceAttributesRoundUp;

  @Metadata({ data: "json, name=settledAt" })
  settledAt: Date;

  @Metadata({ data: "json, name=status" })
  status: any;
}


export class TransactionResourceLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self: string;
}


export class TransactionResourceRelationshipsAccountData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsAccountLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class TransactionResourceRelationshipsAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: TransactionResourceRelationshipsAccountData;

  @Metadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsAccountLinks;
}


export class TransactionResourceRelationshipsCategoryData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsCategoryLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class TransactionResourceRelationshipsCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: TransactionResourceRelationshipsCategoryData;

  @Metadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsCategoryLinks;
}


export class TransactionResourceRelationshipsParentCategoryData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsParentCategoryLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class TransactionResourceRelationshipsParentCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: TransactionResourceRelationshipsParentCategoryData;

  @Metadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsParentCategoryLinks;
}


export class TransactionResourceRelationshipsTagsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsTagsLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self: string;
}


export class TransactionResourceRelationshipsTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TransactionResourceRelationshipsTagsData })
  data: TransactionResourceRelationshipsTagsData[];

  @Metadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsTagsLinks;
}


export class TransactionResourceRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: TransactionResourceRelationshipsAccount;

  @Metadata({ data: "json, name=category" })
  category: TransactionResourceRelationshipsCategory;

  @Metadata({ data: "json, name=parentCategory" })
  parentCategory: TransactionResourceRelationshipsParentCategory;

  @Metadata({ data: "json, name=tags" })
  tags: TransactionResourceRelationshipsTags;
}


export class TransactionResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: TransactionResourceAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links?: TransactionResourceLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: TransactionResourceRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}
