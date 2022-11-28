import { SpeakeasyBase } from "../../../internal/utils";
import { Hook } from "./hook";
/**
 * Represents the output of lists hooks request.
**/
export declare class HookOutput extends SpeakeasyBase {
    hooks?: Hook[];
    next?: string;
    self?: string;
    signingKey?: string;
}
