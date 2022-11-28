import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NodeQueryCompositionEnum {
    And = "and",
    Or = "or"
}
export declare class NodeQueryWhere extends SpeakeasyBase {
    attribute?: string;
    comparator?: string;
    objectType?: string;
    value?: string;
}
export declare class NodeQuery extends SpeakeasyBase {
    composition?: NodeQueryCompositionEnum;
    select?: string;
    where?: NodeQueryWhere[];
}
