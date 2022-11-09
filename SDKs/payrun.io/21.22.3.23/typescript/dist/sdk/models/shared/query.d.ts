import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The querys' groups
**/
export declare class QueryQueryGroup extends SpeakeasyBase {
    group?: any[];
}
/**
 * The querys' variables
**/
export declare class QueryQueryVariable extends SpeakeasyBase {
    variable?: any[];
}
export declare class QueryQuery extends SpeakeasyBase {
    excludeNullOrEmptyElements?: boolean;
    groups?: QueryQueryGroup;
    rootNodeName?: string;
    suppressMetricAttributes?: boolean;
    variables?: QueryQueryVariable;
}
export declare class Query extends SpeakeasyBase {
    query?: QueryQuery;
}
