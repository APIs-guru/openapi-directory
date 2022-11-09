import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChartDataFilterOpEnum {
    EqualEqual = "=="
,    NotEqual = "!="
,    GreaterThan = ">"
,    LessThan = "<"
,    GreaterThanEqual = ">="
,    LessThanEqual = "<="
,    Like = "LIKE"
,    Ilike = "ILIKE"
,    IsNull = "IS NULL"
,    IsNotNull = "IS NOT NULL"
,    In = "IN"
,    NotIn = "NOT IN"
,    Regex = "REGEX"
,    IsTrue = "IS TRUE"
,    IsFalse = "IS FALSE"
}


export class ChartDataFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=col" })
  col: string;

  @Metadata({ data: "json, name=op" })
  op: ChartDataFilterOpEnum;

  @Metadata({ data: "json, name=val" })
  val?: any;
}
