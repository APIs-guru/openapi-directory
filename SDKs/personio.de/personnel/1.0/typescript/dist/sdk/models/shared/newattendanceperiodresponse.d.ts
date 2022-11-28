import { SpeakeasyBase } from "../../../internal/utils";
export declare class NewAttendancePeriodResponseData extends SpeakeasyBase {
    id?: number[];
    message?: string;
}
export declare class NewAttendancePeriodResponse extends SpeakeasyBase {
    data: NewAttendancePeriodResponseData;
    success: boolean;
}
