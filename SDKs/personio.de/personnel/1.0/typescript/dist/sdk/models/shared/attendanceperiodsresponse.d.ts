import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttendancePeriodsResponseDataAttributes extends SpeakeasyBase {
    break: number;
    comment: string;
    date: Date;
    employee: number;
    endTime: string;
    isHoliday: boolean;
    isOnTimeOff: boolean;
    startTime: string;
}
export declare class AttendancePeriodsResponseData extends SpeakeasyBase {
    attributes: AttendancePeriodsResponseDataAttributes[];
    id: number;
    type: string;
}
export declare class AttendancePeriodsResponse extends SpeakeasyBase {
    data: AttendancePeriodsResponseData[];
    limit?: number;
    offset?: number;
    success: boolean;
}
