import { SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";
/**
 * Represents the result of a background check search
**/
export declare class CheckOutput extends SpeakeasyBase {
    check: Check;
    details: string;
    self: string;
}
