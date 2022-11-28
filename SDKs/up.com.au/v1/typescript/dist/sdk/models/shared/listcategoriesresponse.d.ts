import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryResource } from "./categoryresource";
/**
 * Successful response to get all categories and their ancestry. The
 * returned list is not paginated.
 *
**/
export declare class ListCategoriesResponse extends SpeakeasyBase {
    data: CategoryResource[];
}
