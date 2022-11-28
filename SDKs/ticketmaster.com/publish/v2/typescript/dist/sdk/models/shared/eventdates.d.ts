import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDates } from "./accessdates";
import { EndDates } from "./enddates";
import { StartDates } from "./startdates";
import { EventStatus } from "./eventstatus";
/**
 * Event's Dates
**/
export declare class EventDates extends SpeakeasyBase {
    access?: AccessDates;
    end?: EndDates;
    start?: StartDates;
    status?: EventStatus;
    timezone?: string;
}
