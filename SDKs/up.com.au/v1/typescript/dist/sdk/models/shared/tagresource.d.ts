import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagResourceRelationshipsTransactionsLinks extends SpeakeasyBase {
    related: string;
}
export declare class TagResourceRelationshipsTransactions extends SpeakeasyBase {
    links?: TagResourceRelationshipsTransactionsLinks;
}
export declare class TagResourceRelationships extends SpeakeasyBase {
    transactions: TagResourceRelationshipsTransactions;
}
/**
 * Provides information about a tag.
 *
**/
export declare class TagResource extends SpeakeasyBase {
    id: string;
    relationships: TagResourceRelationships;
    type: string;
}
