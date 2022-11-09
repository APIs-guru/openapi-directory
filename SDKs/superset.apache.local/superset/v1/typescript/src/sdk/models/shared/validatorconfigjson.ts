import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ValidatorConfigJsonOpEnum {
    LessThan = "<"
,    LessThanEqual = "<="
,    GreaterThan = ">"
,    GreaterThanEqual = ">="
,    EqualEqual = "=="
,    NotEqual = "!="
}


export class ValidatorConfigJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=op" })
  op?: ValidatorConfigJsonOpEnum;

  @Metadata({ data: "json, name=threshold" })
  threshold?: number;
}
