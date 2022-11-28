import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupNewProperties extends SpeakeasyBase {
    name: string;
    value: any;
}
export declare enum GroupNewQueryCompositionEnum {
    And = "and",
    Or = "or"
}
export declare class GroupNewQueryWhere extends SpeakeasyBase {
    attribute?: string;
    comparator?: string;
    objectType?: string;
    value?: string;
}
/**
 * The criteria defining the group. If not provided, the group will be empty.
**/
export declare class GroupNewQuery extends SpeakeasyBase {
    composition?: GroupNewQueryCompositionEnum;
    select?: string;
    where?: GroupNewQueryWhere[];
}
export declare class GroupNew extends SpeakeasyBase {
    category: string;
    description?: string;
    displayName: string;
    dynamic?: boolean;
    enabled?: boolean;
    id?: string;
    properties?: GroupNewProperties[];
    query?: GroupNewQuery;
    source?: string;
}
