import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SortByClauseOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare class SortByClause extends SpeakeasyBase {
    field?: string;
    order?: SortByClauseOrderEnum;
}
