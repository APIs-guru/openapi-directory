import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryResource } from "./categoryresource";
/**
 * Successful response to get a single category and its ancestry.
 *
**/
export declare class GetCategoryResponse extends SpeakeasyBase {
    data: CategoryResource;
}
