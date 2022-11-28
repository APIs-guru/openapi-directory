import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupProperties extends SpeakeasyBase {
    name: string;
    value: any;
}
export declare enum GroupQueryCompositionEnum {
    And = "and",
    Or = "or"
}
export declare class GroupQueryWhere extends SpeakeasyBase {
    attribute?: string;
    comparator?: string;
    objectType?: string;
    value?: string;
}
/**
 * The criteria defining the group
**/
export declare class GroupQuery extends SpeakeasyBase {
    composition?: GroupQueryCompositionEnum;
    select?: string;
    where?: GroupQueryWhere[];
}
export declare class Group extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    dynamic?: boolean;
    enabled?: boolean;
    groupClass?: string[];
    id?: string;
    nodeIds?: string[];
    properties?: GroupProperties[];
    query?: GroupQuery;
}
