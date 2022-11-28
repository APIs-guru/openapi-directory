import { SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";
/**
 * Event's Start Dates
**/
export declare class StartDates extends SpeakeasyBase {
    dateTba?: boolean;
    dateTbd?: boolean;
    dateTime?: Date;
    localDate?: Date;
    localTime?: LocalTime;
    noSpecificTime?: boolean;
    timeTba?: boolean;
}
