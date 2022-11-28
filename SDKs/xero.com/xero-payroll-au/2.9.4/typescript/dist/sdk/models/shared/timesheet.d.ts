import { SpeakeasyBase } from "../../../internal/utils";
import { TimesheetStatusEnum } from "./timesheetstatusenum";
import { TimesheetLineInput } from "./timesheetline";
import { ValidationError } from "./validationerror";
import { TimesheetLine } from "./timesheetline";
export declare class TimesheetInput extends SpeakeasyBase {
    employeeId: string;
    endDate: string;
    hours?: number;
    startDate: string;
    status?: TimesheetStatusEnum;
    timesheetId?: string;
    timesheetLines?: TimesheetLineInput[];
    validationErrors?: ValidationError[];
}
export declare class Timesheet extends SpeakeasyBase {
    employeeId: string;
    endDate: string;
    hours?: number;
    startDate: string;
    status?: TimesheetStatusEnum;
    timesheetId?: string;
    timesheetLines?: TimesheetLine[];
    updatedDateUtc?: string;
    validationErrors?: ValidationError[];
}
