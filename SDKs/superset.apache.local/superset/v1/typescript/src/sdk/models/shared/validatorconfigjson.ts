import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ValidatorConfigJsonOpEnum {
    LessThan = "<",
    LessThanEqual = "<=",
    GreaterThan = ">",
    GreaterThanEqual = ">=",
    EqualEqual = "==",
    NotEqual = "!="
}


export class ValidatorConfigJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=op" })
  op?: ValidatorConfigJsonOpEnum;

  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold?: number;
}
