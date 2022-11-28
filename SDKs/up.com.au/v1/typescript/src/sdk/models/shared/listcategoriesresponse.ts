import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryResource } from "./categoryresource";



// ListCategoriesResponse
/** 
 * Successful response to get all categories and their ancestry. The
 * returned list is not paginated.
 * 
**/
export class ListCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: CategoryResource })
  data: CategoryResource[];
}
