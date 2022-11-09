import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AbsenceEntitlement } from "./absenceentitlement";
import { Attribute } from "./attribute";
import { CostCenters } from "./costcenters";
import { Attribute } from "./attribute";
import { Department } from "./department";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { HolidayCalendar } from "./holidaycalendar";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Office } from "./office";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Supervisor } from "./supervisor";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { Attribute } from "./attribute";
import { WorkSchedule } from "./workschedule";


export class EmployeeResponseDataAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=absence_entitlement" })
  absenceEntitlement?: AbsenceEntitlement;

  @Metadata({ data: "json, name=contract_end_date" })
  contractEndDate?: Attribute;

  @Metadata({ data: "json, name=cost_centers" })
  costCenters?: CostCenters;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Attribute;

  @Metadata({ data: "json, name=department" })
  department?: Department;

  @Metadata({ data: "json, name=email" })
  email?: Attribute;

  @Metadata({ data: "json, name=employment_type" })
  employmentType?: Attribute;

  @Metadata({ data: "json, name=first_name" })
  firstName?: Attribute;

  @Metadata({ data: "json, name=fix_salary" })
  fixSalary?: Attribute;

  @Metadata({ data: "json, name=gender" })
  gender?: Attribute;

  @Metadata({ data: "json, name=hire_date" })
  hireDate?: Attribute;

  @Metadata({ data: "json, name=holiday_calendar" })
  holidayCalendar?: HolidayCalendar;

  @Metadata({ data: "json, name=hourly_salary" })
  hourlySalary?: Attribute;

  @Metadata({ data: "json, name=id" })
  id?: Attribute;

  @Metadata({ data: "json, name=last_name" })
  lastName?: Attribute;

  @Metadata({ data: "json, name=office" })
  office?: Office;

  @Metadata({ data: "json, name=position" })
  position?: Attribute;

  @Metadata({ data: "json, name=probation_period_end" })
  probationPeriodEnd?: Attribute;

  @Metadata({ data: "json, name=status" })
  status?: Attribute;

  @Metadata({ data: "json, name=supervisor" })
  supervisor?: Supervisor;

  @Metadata({ data: "json, name=termination_date" })
  terminationDate?: Attribute;

  @Metadata({ data: "json, name=termination_reason" })
  terminationReason?: Attribute;

  @Metadata({ data: "json, name=termination_type" })
  terminationType?: Attribute;

  @Metadata({ data: "json, name=vacation_day_balance" })
  vacationDayBalance?: Attribute;

  @Metadata({ data: "json, name=weekly_working_hours" })
  weeklyWorkingHours?: Attribute;

  @Metadata({ data: "json, name=work_schedule" })
  workSchedule?: WorkSchedule;
}


export class EmployeeResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.EmployeeResponseDataAttributes })
  attributes: EmployeeResponseDataAttributes[];

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class EmployeeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: EmployeeResponseData;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
