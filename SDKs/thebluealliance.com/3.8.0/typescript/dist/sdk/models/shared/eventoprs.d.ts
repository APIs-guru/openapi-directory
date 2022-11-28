import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OPR, DPR, and CCWM for teams at the event.
**/
export declare class EventOpRs extends SpeakeasyBase {
    ccwms?: Map<string, number>;
    dprs?: Map<string, number>;
    oprs?: Map<string, number>;
}
