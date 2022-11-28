import { SpeakeasyBase } from "../../../internal/utils";
import { Chronology } from "./chronology";
import { DateTimeFieldType } from "./datetimefieldtype";
import { DateTimeField } from "./datetimefield";
export declare class LocalTime extends SpeakeasyBase {
    chronology?: Chronology;
    fieldTypes?: DateTimeFieldType[];
    fields?: DateTimeField[];
    hourOfDay?: number;
    millisOfDay?: number;
    millisOfSecond?: number;
    minuteOfHour?: number;
    secondOfMinute?: number;
    values?: number[];
}
