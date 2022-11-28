import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagResourceRelationshipsTransactionsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class TagResourceRelationshipsTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TagResourceRelationshipsTransactionsLinks;
}


export class TagResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactions" })
  transactions: TagResourceRelationshipsTransactions;
}


// TagResource
/** 
 * Provides information about a tag.
 * 
**/
export class TagResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: TagResourceRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
