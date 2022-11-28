import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateTimeOffPeriodRequest extends SpeakeasyBase {
    comment?: string;
    employeeId: number;
    endDate: Date;
    halfDayEnd: boolean;
    halfDayStart: boolean;
    startDate: Date;
    timeOffTypeId: number;
}
