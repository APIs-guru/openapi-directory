import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
export declare class CategoryGroupWithCategories extends SpeakeasyBase {
    categories: Category[];
    deleted: boolean;
    hidden: boolean;
    id: string;
    name: string;
}
