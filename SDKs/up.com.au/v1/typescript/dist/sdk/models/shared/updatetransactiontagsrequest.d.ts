import { SpeakeasyBase } from "../../../internal/utils";
import { TagInputResourceIdentifier } from "./taginputresourceidentifier";
/**
 * Request to add or remove tags associated with a transaction.
 *
**/
export declare class UpdateTransactionTagsRequest extends SpeakeasyBase {
    data: TagInputResourceIdentifier[];
}
