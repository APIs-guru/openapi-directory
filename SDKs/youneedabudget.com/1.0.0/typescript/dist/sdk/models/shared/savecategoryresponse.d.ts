import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
export declare class SaveCategoryResponseData extends SpeakeasyBase {
    category: Category;
    serverKnowledge: number;
}
export declare class SaveCategoryResponse extends SpeakeasyBase {
    data: SaveCategoryResponseData;
}
