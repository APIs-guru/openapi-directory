import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EventStatusCodeEnum {
    Onsale = "onsale",
    Offsale = "offsale",
    Canceled = "canceled",
    Postponed = "postponed",
    Rescheduled = "rescheduled"
}
/**
 * Event's Status
**/
export declare class EventStatus extends SpeakeasyBase {
    code?: EventStatusCodeEnum;
}
