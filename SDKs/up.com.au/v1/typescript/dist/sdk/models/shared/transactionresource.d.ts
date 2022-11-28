import { SpeakeasyBase } from "../../../internal/utils";
import { MoneyObject } from "./moneyobject";
/**
 * If all or part of this transaction was instantly reimbursed in the
 * form of cashback, details of the reimbursement.
 *
**/
export declare class TransactionResourceAttributesCashback extends SpeakeasyBase {
    amount: MoneyObject;
    description: string;
}
/**
 * The foreign currency amount of this transaction. This field will be
 * `null` for domestic transactions. The amount was converted to the AUD
 * amount reflected in the `amount` of this transaction. Refer to the
 * `holdInfo` field for the original `foreignAmount` the transaction was
 * `HELD` at.
 *
**/
export declare class TransactionResourceAttributesForeignAmount extends SpeakeasyBase {
    currencyCode: string;
    value: string;
    valueInBaseUnits: number;
}
/**
 * The foreign currency amount of this transaction while in the `HELD`
 * status. This field will be `null` for domestic transactions. The amount
 * was converted to the AUD amount reflected in the `amount` field.
 *
**/
export declare class TransactionResourceAttributesHoldInfoForeignAmount extends SpeakeasyBase {
    currencyCode: string;
    value: string;
    valueInBaseUnits: number;
}
/**
 * If this transaction is currently in the `HELD` status, or was ever in
 * the `HELD` status, the `amount` and `foreignAmount` of the
 * transaction while `HELD`.
 *
**/
export declare class TransactionResourceAttributesHoldInfo extends SpeakeasyBase {
    amount: MoneyObject;
    foreignAmount: TransactionResourceAttributesHoldInfoForeignAmount;
}
/**
 * The portion of the Round Up `amount` owing to boosted Round Ups,
 * represented as a negative value. If no boost was added to the Round Up
 * this field will be `null`.
 *
**/
export declare class TransactionResourceAttributesRoundUpBoostPortion extends SpeakeasyBase {
    currencyCode: string;
    value: string;
    valueInBaseUnits: number;
}
/**
 * Details of how this transaction was rounded-up. If no Round Up was
 * applied this field will be `null`.
 *
**/
export declare class TransactionResourceAttributesRoundUp extends SpeakeasyBase {
    amount: MoneyObject;
    boostPortion: TransactionResourceAttributesRoundUpBoostPortion;
}
export declare class TransactionResourceAttributes extends SpeakeasyBase {
    amount: MoneyObject;
    cashback: TransactionResourceAttributesCashback;
    createdAt: Date;
    description: string;
    foreignAmount: TransactionResourceAttributesForeignAmount;
    holdInfo: TransactionResourceAttributesHoldInfo;
    message: string;
    rawText: string;
    roundUp: TransactionResourceAttributesRoundUp;
    settledAt: Date;
    status: any;
}
export declare class TransactionResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class TransactionResourceRelationshipsAccountData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class TransactionResourceRelationshipsAccountLinks extends SpeakeasyBase {
    related: string;
}
export declare class TransactionResourceRelationshipsAccount extends SpeakeasyBase {
    data: TransactionResourceRelationshipsAccountData;
    links?: TransactionResourceRelationshipsAccountLinks;
}
export declare class TransactionResourceRelationshipsCategoryData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class TransactionResourceRelationshipsCategoryLinks extends SpeakeasyBase {
    related: string;
}
export declare class TransactionResourceRelationshipsCategory extends SpeakeasyBase {
    data: TransactionResourceRelationshipsCategoryData;
    links?: TransactionResourceRelationshipsCategoryLinks;
}
export declare class TransactionResourceRelationshipsParentCategoryData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class TransactionResourceRelationshipsParentCategoryLinks extends SpeakeasyBase {
    related: string;
}
export declare class TransactionResourceRelationshipsParentCategory extends SpeakeasyBase {
    data: TransactionResourceRelationshipsParentCategoryData;
    links?: TransactionResourceRelationshipsParentCategoryLinks;
}
export declare class TransactionResourceRelationshipsTagsData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class TransactionResourceRelationshipsTagsLinks extends SpeakeasyBase {
    self: string;
}
export declare class TransactionResourceRelationshipsTags extends SpeakeasyBase {
    data: TransactionResourceRelationshipsTagsData[];
    links?: TransactionResourceRelationshipsTagsLinks;
}
export declare class TransactionResourceRelationships extends SpeakeasyBase {
    account: TransactionResourceRelationshipsAccount;
    category: TransactionResourceRelationshipsCategory;
    parentCategory: TransactionResourceRelationshipsParentCategory;
    tags: TransactionResourceRelationshipsTags;
}
export declare class TransactionResource extends SpeakeasyBase {
    attributes: TransactionResourceAttributes;
    id: string;
    links?: TransactionResourceLinks;
    relationships: TransactionResourceRelationships;
    type: string;
}
