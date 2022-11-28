import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousCheckEntry } from "./continuouscheckentry";
import { Check } from "./check";
export declare enum ContinuousCheckContinuousCheckStatusEnum {
    New = "new",
    Up = "up",
    Down = "down",
    Same = "same"
}
/**
 * Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in.
**/
export declare class ContinuousCheck extends SpeakeasyBase {
    continuousCheckId?: string;
    continuousCheckStatus: ContinuousCheckContinuousCheckStatusEnum;
    creationDate?: Date;
    enabled?: boolean;
    frequency: string;
    history?: ContinuousCheckEntry;
    lastCheckId: string;
    nextRunDate?: Date;
    originalCheck?: Check;
    updateDate?: Date;
}
