import { SpeakeasyBase } from "../../../internal/utils";
import { DurationField } from "./durationfield";
import { DateTimeFieldType } from "./datetimefieldtype";
export declare class DateTimeField extends SpeakeasyBase {
    durationField?: DurationField;
    leapDurationField?: DurationField;
    lenient?: boolean;
    maximumValue?: number;
    minimumValue?: number;
    name?: string;
    rangeDurationField?: DurationField;
    supported?: boolean;
    type?: DateTimeFieldType;
}
