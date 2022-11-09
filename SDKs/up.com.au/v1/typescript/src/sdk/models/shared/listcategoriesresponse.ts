import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryResource } from "./categoryresource";


// ListCategoriesResponse
/** 
 * Successful response to get all categories and their ancestry. The
 * returned list is not paginated.
 * 
**/
export class ListCategoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.CategoryResource })
  data: CategoryResource[];
}
