import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoryResource } from "./categoryresource";


// GetCategoryResponse
/** 
 * Successful response to get a single category and its ancestry.
 * 
**/
export class GetCategoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: CategoryResource;
}
