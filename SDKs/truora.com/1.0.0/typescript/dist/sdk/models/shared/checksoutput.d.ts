import { SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";
/**
 * Represents the results of a background check search
**/
export declare class ChecksOutput extends SpeakeasyBase {
    checks: Check[];
    next?: string;
    self: string;
}
