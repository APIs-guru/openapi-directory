import { SpeakeasyBase } from "../../../internal/utils";
import { AbsenceEntitlement } from "./absenceentitlement";
import { Attribute } from "./attribute";
import { CostCenters } from "./costcenters";
import { Department } from "./department";
import { HolidayCalendar } from "./holidaycalendar";
import { Office } from "./office";
import { Supervisor } from "./supervisor";
import { WorkSchedule } from "./workschedule";
export declare class EmployeesResponseDataAttributes extends SpeakeasyBase {
    absenceEntitlement?: AbsenceEntitlement;
    contractEndDate?: Attribute;
    costCenters?: CostCenters;
    createdAt?: Attribute;
    department?: Department;
    email?: Attribute;
    employmentType?: Attribute;
    firstName?: Attribute;
    fixSalary?: Attribute;
    gender?: Attribute;
    hireDate?: Attribute;
    holidayCalendar?: HolidayCalendar;
    hourlySalary?: Attribute;
    id?: Attribute;
    lastName?: Attribute;
    office?: Office;
    position?: Attribute;
    probationPeriodEnd?: Attribute;
    status?: Attribute;
    supervisor?: Supervisor;
    terminationDate?: Attribute;
    terminationReason?: Attribute;
    terminationType?: Attribute;
    vacationDayBalance?: Attribute;
    weeklyWorkingHours?: Attribute;
    workSchedule?: WorkSchedule;
}
export declare class EmployeesResponseData extends SpeakeasyBase {
    attributes: EmployeesResponseDataAttributes[];
    type: string;
}
export declare class EmployeesResponse extends SpeakeasyBase {
    data: EmployeesResponseData[];
    success: boolean;
}
