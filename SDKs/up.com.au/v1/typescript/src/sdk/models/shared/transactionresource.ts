import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MoneyObject } from "./moneyobject";



// TransactionResourceAttributesCashback
/** 
 * If all or part of this transaction was instantly reimbursed in the
 * form of cashback, details of the reimbursement.
 * 
**/
export class TransactionResourceAttributesCashback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @SpeakeasyMetadata({ data: "json, name=description" })
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
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "json, name=valueInBaseUnits" })
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
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "json, name=valueInBaseUnits" })
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
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @SpeakeasyMetadata({ data: "json, name=foreignAmount" })
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
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "json, name=valueInBaseUnits" })
  valueInBaseUnits: number;
}


// TransactionResourceAttributesRoundUp
/** 
 * Details of how this transaction was rounded-up. If no Round Up was
 * applied this field will be `null`.
 * 
**/
export class TransactionResourceAttributesRoundUp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @SpeakeasyMetadata({ data: "json, name=boostPortion" })
  boostPortion: TransactionResourceAttributesRoundUpBoostPortion;
}


export class TransactionResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @SpeakeasyMetadata({ data: "json, name=cashback" })
  cashback: TransactionResourceAttributesCashback;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=foreignAmount" })
  foreignAmount: TransactionResourceAttributesForeignAmount;

  @SpeakeasyMetadata({ data: "json, name=holdInfo" })
  holdInfo: TransactionResourceAttributesHoldInfo;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=rawText" })
  rawText: string;

  @SpeakeasyMetadata({ data: "json, name=roundUp" })
  roundUp: TransactionResourceAttributesRoundUp;

  @SpeakeasyMetadata({ data: "json, name=settledAt" })
  settledAt: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: any;
}


export class TransactionResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


export class TransactionResourceRelationshipsAccountData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsAccountLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class TransactionResourceRelationshipsAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionResourceRelationshipsAccountData;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsAccountLinks;
}


export class TransactionResourceRelationshipsCategoryData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsCategoryLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class TransactionResourceRelationshipsCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionResourceRelationshipsCategoryData;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsCategoryLinks;
}


export class TransactionResourceRelationshipsParentCategoryData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsParentCategoryLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class TransactionResourceRelationshipsParentCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionResourceRelationshipsParentCategoryData;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsParentCategoryLinks;
}


export class TransactionResourceRelationshipsTagsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsTagsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


export class TransactionResourceRelationshipsTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: TransactionResourceRelationshipsTagsData })
  data: TransactionResourceRelationshipsTagsData[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsTagsLinks;
}


export class TransactionResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: TransactionResourceRelationshipsAccount;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category: TransactionResourceRelationshipsCategory;

  @SpeakeasyMetadata({ data: "json, name=parentCategory" })
  parentCategory: TransactionResourceRelationshipsParentCategory;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: TransactionResourceRelationshipsTags;
}


export class TransactionResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: TransactionResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: TransactionResourceRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
