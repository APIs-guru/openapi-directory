import { SpeakeasyBase } from "../../../internal/utils";
export declare class NewAttendancePeriodRequestAttendances extends SpeakeasyBase {
    break: number;
    comment: string;
    date: Date;
    employee: number;
    endTime: string;
    startTime: string;
}
export declare class NewAttendancePeriodRequest extends SpeakeasyBase {
    attendances?: NewAttendancePeriodRequestAttendances[];
}
