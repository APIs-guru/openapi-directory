import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagInputResourceIdentifier } from "./taginputresourceidentifier";


// UpdateTransactionTagsRequest
/** 
 * Request to add or remove tags associated with a transaction.
 * 
**/
export class UpdateTransactionTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TagInputResourceIdentifier })
  data: TagInputResourceIdentifier[];
}
