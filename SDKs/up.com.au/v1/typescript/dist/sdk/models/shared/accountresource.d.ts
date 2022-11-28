import { SpeakeasyBase } from "../../../internal/utils";
import { MoneyObject } from "./moneyobject";
export declare class AccountResourceAttributes extends SpeakeasyBase {
    accountType: any;
    balance: MoneyObject;
    createdAt: Date;
    displayName: string;
}
export declare class AccountResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class AccountResourceRelationshipsTransactionsLinks extends SpeakeasyBase {
    related: string;
}
export declare class AccountResourceRelationshipsTransactions extends SpeakeasyBase {
    links?: AccountResourceRelationshipsTransactionsLinks;
}
export declare class AccountResourceRelationships extends SpeakeasyBase {
    transactions: AccountResourceRelationshipsTransactions;
}
/**
 * Provides information about an Up bank account.
 *
**/
export declare class AccountResource extends SpeakeasyBase {
    attributes: AccountResourceAttributes;
    id: string;
    links?: AccountResourceLinks;
    relationships: AccountResourceRelationships;
    type: string;
}
