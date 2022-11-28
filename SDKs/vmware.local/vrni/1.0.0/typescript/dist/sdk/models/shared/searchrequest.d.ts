import { SpeakeasyBase } from "../../../internal/utils";
import { AllEntityTypeEnum } from "./allentitytypeenum";
import { SortByClause } from "./sortbyclause";
import { TimeRange } from "./timerange";
export declare class SearchRequest extends SpeakeasyBase {
    cursor?: string;
    entityType?: AllEntityTypeEnum;
    filter?: string;
    size?: number;
    sortBy?: SortByClause;
    timeRange?: TimeRange;
}
