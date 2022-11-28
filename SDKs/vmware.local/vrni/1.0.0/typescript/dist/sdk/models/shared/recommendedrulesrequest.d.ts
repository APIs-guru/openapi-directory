import { SpeakeasyBase } from "../../../internal/utils";
import { MicroSecGroup } from "./microsecgroup";
import { TimeRange } from "./timerange";
export declare class RecommendedRulesRequest extends SpeakeasyBase {
    group1?: MicroSecGroup;
    group2?: MicroSecGroup;
    timeRange?: TimeRange;
}
