import { SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
/**
 * Represents to changelog entry of a continuous check
**/
export declare class ContinuousCheckEntry extends SpeakeasyBase {
    changes?: Change[];
    checkId?: string;
    continuousCheckId?: string;
    creationDate?: Date;
    previousCheckId?: string;
}
