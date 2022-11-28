import { SpeakeasyBase } from "../../../internal/utils";
import { LeavePeriod } from "./leaveperiod";
import { ValidationError } from "./validationerror";
export declare class LeaveApplication extends SpeakeasyBase {
    description?: string;
    employeeId?: string;
    endDate?: string;
    leaveApplicationId?: string;
    leavePeriods?: LeavePeriod[];
    leaveTypeId?: string;
    startDate?: string;
    title?: string;
    updatedDateUtc?: string;
    validationErrors?: ValidationError[];
}
export declare class LeaveApplicationInput extends SpeakeasyBase {
    description?: string;
    employeeId?: string;
    endDate?: string;
    leaveApplicationId?: string;
    leavePeriods?: LeavePeriod[];
    leaveTypeId?: string;
    startDate?: string;
    title?: string;
    validationErrors?: ValidationError[];
}
