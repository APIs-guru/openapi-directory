import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Solution } from "./solution";
export declare class Error extends SpeakeasyBase {
    code?: string;
    field?: string;
    message?: string;
    solution?: Solution;
}
