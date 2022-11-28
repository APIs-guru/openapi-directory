import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GroupUpdateQueryCompositionEnum {
    And = "and",
    Or = "or"
}
export declare class GroupUpdateQueryWhere extends SpeakeasyBase {
    attribute?: string;
    comparator?: string;
    objectType?: string;
    value?: string;
}
/**
 * The criteria defining the group. If not provided, the group will be empty.
**/
export declare class GroupUpdateQuery extends SpeakeasyBase {
    composition?: GroupUpdateQueryCompositionEnum;
    select?: string;
    where?: GroupUpdateQueryWhere[];
}
export declare class GroupUpdate extends SpeakeasyBase {
    category?: string;
    description?: string;
    displayName?: string;
    dynamic?: boolean;
    enabled?: boolean;
    query?: GroupUpdateQuery;
}
