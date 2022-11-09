import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LeavePeriod } from "./leaveperiod";
import { ValidationError } from "./validationerror";


export class LeaveApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=LeaveApplicationID" })
  leaveApplicationId?: string;

  @Metadata({ data: "json, name=LeavePeriods", elemType: shared.LeavePeriod })
  leavePeriods?: LeavePeriod[];

  @Metadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=ValidationErrors", elemType: shared.ValidationError })
  validationErrors?: ValidationError[];
}
