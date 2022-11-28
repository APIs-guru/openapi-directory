import { SpeakeasyBase } from "../../../internal/utils";
import { RuleTargets } from "./ruletargets";
export declare class RuleTags extends SpeakeasyBase {
    name?: string;
}
export declare class Rule extends SpeakeasyBase {
    directives?: string[];
    displayName?: string;
    enabled?: boolean;
    id?: string;
    longDescription?: string;
    shortDescription?: string;
    system?: boolean;
    tags?: RuleTags[];
    targets?: RuleTargets[];
}
