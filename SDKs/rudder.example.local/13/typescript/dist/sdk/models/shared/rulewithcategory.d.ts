import { SpeakeasyBase } from "../../../internal/utils";
export declare class RuleWithCategoryTags extends SpeakeasyBase {
    name?: string;
}
export declare class RuleWithCategory extends SpeakeasyBase {
    category?: string;
    directives?: string[];
    displayName?: string;
    enabled?: boolean;
    id?: string;
    longDescription?: string;
    shortDescription?: string;
    system?: boolean;
    tags?: RuleWithCategoryTags[];
    targets?: string[];
}
