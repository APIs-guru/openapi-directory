import { SpeakeasyBase } from "../../../internal/utils";
import { AltLabel } from "./altlabel";
import { Value } from "./value";
export declare class VariableLabel extends SpeakeasyBase {
    altLabels?: AltLabel[];
    text?: string;
}
export declare class VariableVariableValuesRange extends SpeakeasyBase {
    from?: string;
    to?: string;
}
export declare class VariableVariableValues extends SpeakeasyBase {
    range?: VariableVariableValuesRange;
    values?: Value[];
}
export declare class Variable extends SpeakeasyBase {
    ident?: string;
    label?: VariableLabel;
    maxResponses?: number;
    name?: string;
    parentType?: number;
    questions?: Variable[];
    type?: number;
    use?: number;
    variableValues?: VariableVariableValues;
}
