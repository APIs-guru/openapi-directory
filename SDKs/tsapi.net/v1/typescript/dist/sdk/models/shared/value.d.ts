import { SpeakeasyBase } from "../../../internal/utils";
import { AltLabel } from "./altlabel";
export declare class ValueLabel extends SpeakeasyBase {
    altLabels?: AltLabel[];
    text?: string;
}
export declare class Value extends SpeakeasyBase {
    code?: string;
    ident?: string;
    label?: ValueLabel;
    score?: number;
}
