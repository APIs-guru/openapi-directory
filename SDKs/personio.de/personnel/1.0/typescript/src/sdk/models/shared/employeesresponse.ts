import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbsenceEntitlement } from "./absenceentitlement";
import { Attribute } from "./attribute";
import { CostCenters } from "./costcenters";
import { Department } from "./department";
import { HolidayCalendar } from "./holidaycalendar";
import { Office } from "./office";
import { Supervisor } from "./supervisor";
import { WorkSchedule } from "./workschedule";



export class EmployeesResponseDataAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absence_entitlement" })
  absenceEntitlement?: AbsenceEntitlement;

  @SpeakeasyMetadata({ data: "json, name=contract_end_date" })
  contractEndDate?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=cost_centers" })
  costCenters?: CostCenters;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: Department;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=employment_type" })
  employmentType?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=fix_salary" })
  fixSalary?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=hire_date" })
  hireDate?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=holiday_calendar" })
  holidayCalendar?: HolidayCalendar;

  @SpeakeasyMetadata({ data: "json, name=hourly_salary" })
  hourlySalary?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=office" })
  office?: Office;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=probation_period_end" })
  probationPeriodEnd?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=supervisor" })
  supervisor?: Supervisor;

  @SpeakeasyMetadata({ data: "json, name=termination_date" })
  terminationDate?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=termination_reason" })
  terminationReason?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=termination_type" })
  terminationType?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=vacation_day_balance" })
  vacationDayBalance?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=weekly_working_hours" })
  weeklyWorkingHours?: Attribute;

  @SpeakeasyMetadata({ data: "json, name=work_schedule" })
  workSchedule?: WorkSchedule;
}


export class EmployeesResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: EmployeesResponseDataAttributes })
  attributes: EmployeesResponseDataAttributes[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class EmployeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: EmployeesResponseData })
  data: EmployeesResponseData[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
