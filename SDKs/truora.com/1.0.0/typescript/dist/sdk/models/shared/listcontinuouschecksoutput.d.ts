import { SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";
/**
 * Represents to ListContinuousChecksOutput
**/
export declare class ListContinuousChecksOutput extends SpeakeasyBase {
    continuousChecks?: Check[];
    next?: string;
    self?: string;
}
