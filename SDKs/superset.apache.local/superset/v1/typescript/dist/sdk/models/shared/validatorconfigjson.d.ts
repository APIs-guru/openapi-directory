import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ValidatorConfigJsonOpEnum {
    LessThan = "<",
    LessThanEqual = "<=",
    GreaterThan = ">",
    GreaterThanEqual = ">=",
    EqualEqual = "==",
    NotEqual = "!="
}
export declare class ValidatorConfigJson extends SpeakeasyBase {
    op?: ValidatorConfigJsonOpEnum;
    threshold?: number;
}
