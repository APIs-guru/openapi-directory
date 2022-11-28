import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChartDataFilterOpEnum {
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


export class ChartDataFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=col" })
  col: string;

  @SpeakeasyMetadata({ data: "json, name=op" })
  op: ChartDataFilterOpEnum;

  @SpeakeasyMetadata({ data: "json, name=val" })
  val?: any;
}
