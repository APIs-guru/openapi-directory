import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
import { RulesResponseMetadata } from "./rulesresponsemetadata";
export declare class AddRulesResponse extends SpeakeasyBase {
    data: Rule[];
    meta: RulesResponseMetadata;
}
