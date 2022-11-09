import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagResourceRelationshipsTransactionsLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class TagResourceRelationshipsTransactions extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: TagResourceRelationshipsTransactionsLinks;
}


export class TagResourceRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactions" })
  transactions: TagResourceRelationshipsTransactions;
}


// TagResource
/** 
 * Provides information about a tag.
 * 
**/
export class TagResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=relationships" })
  relationships: TagResourceRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}
