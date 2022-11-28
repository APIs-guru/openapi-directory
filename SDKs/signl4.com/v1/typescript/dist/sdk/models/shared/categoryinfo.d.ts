import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryAugmentation } from "./categoryaugmentation";
export declare class CategoryInfo extends SpeakeasyBase {
    augmentations?: CategoryAugmentation[];
    color?: string;
    id?: string;
    imageName?: string;
    isDefault?: boolean;
    keywordMatching?: number;
    keywords?: string[];
    lastMatch?: Date;
    name?: string;
    options?: number;
    order?: number;
}
export declare class CategoryInfoInput extends SpeakeasyBase {
    augmentations?: CategoryAugmentation[];
    color?: string;
    id?: string;
    imageName?: string;
    keywordMatching?: number;
    keywords?: string[];
    lastMatch?: Date;
    name?: string;
    options?: number;
    order?: number;
}
