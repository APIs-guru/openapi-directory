import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagInputResourceIdentifier } from "./taginputresourceidentifier";



// UpdateTransactionTagsRequest
/** 
 * Request to add or remove tags associated with a transaction.
 * 
**/
export class UpdateTransactionTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: TagInputResourceIdentifier })
  data: TagInputResourceIdentifier[];
}
