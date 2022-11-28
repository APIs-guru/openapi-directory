import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryGroupWithCategories } from "./categorygroupwithcategories";
export declare class CategoriesResponseData extends SpeakeasyBase {
    categoryGroups: CategoryGroupWithCategories[];
    serverKnowledge: number;
}
export declare class CategoriesResponse extends SpeakeasyBase {
    data: CategoriesResponseData;
}
