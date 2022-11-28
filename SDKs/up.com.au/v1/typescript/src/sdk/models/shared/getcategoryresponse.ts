import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryResource } from "./categoryresource";



// GetCategoryResponse
/** 
 * Successful response to get a single category and its ancestry.
 * 
**/
export class GetCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CategoryResource;
}
