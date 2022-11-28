import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LeavePeriod } from "./leaveperiod";
import { ValidationError } from "./validationerror";



export class LeaveApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=LeaveApplicationID" })
  leaveApplicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=LeavePeriods", elemType: LeavePeriod })
  leavePeriods?: LeavePeriod[];

  @SpeakeasyMetadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}


export class LeaveApplicationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=LeaveApplicationID" })
  leaveApplicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=LeavePeriods", elemType: LeavePeriod })
  leavePeriods?: LeavePeriod[];

  @SpeakeasyMetadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}
