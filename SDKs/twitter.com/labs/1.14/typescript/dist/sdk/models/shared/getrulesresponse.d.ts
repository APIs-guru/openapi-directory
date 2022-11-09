import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Rule } from "./rule";
import { RulesResponseMetadata } from "./rulesresponsemetadata";
export declare class GetRulesResponse extends SpeakeasyBase {
    data: Rule[];
    meta: RulesResponseMetadata;
}
