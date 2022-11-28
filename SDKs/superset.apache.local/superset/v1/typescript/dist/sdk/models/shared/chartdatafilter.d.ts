import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChartDataFilterOpEnum {
    EqualEqual = "==",
    NotEqual = "!=",
    GreaterThan = ">",
    LessThan = "<",
    GreaterThanEqual = ">=",
    LessThanEqual = "<=",
    Like = "LIKE",
    Ilike = "ILIKE",
    IsNull = "IS NULL",
    IsNotNull = "IS NOT NULL",
    In = "IN",
    NotIn = "NOT IN",
    Regex = "REGEX",
    IsTrue = "IS TRUE",
    IsFalse = "IS FALSE"
}
export declare class ChartDataFilter extends SpeakeasyBase {
    col: string;
    op: ChartDataFilterOpEnum;
    val?: any;
}
