import { SpeakeasyBase } from "../../../internal/utils";
export declare class RuleNewTags extends SpeakeasyBase {
    name?: string;
}
export declare class RuleNew extends SpeakeasyBase {
    category?: string;
    directives?: string[];
    displayName?: string;
    enabled?: boolean;
    id?: string;
    longDescription?: string;
    shortDescription?: string;
    source?: string;
    system?: boolean;
    tags?: RuleNewTags[];
    targets?: string[];
}
