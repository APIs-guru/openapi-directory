import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimesheetStatusEnum } from "./timesheetstatusenum";
import { TimesheetLine } from "./timesheetline";
import { ValidationError } from "./validationerror";


export class Timesheet extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmployeeID" })
  employeeId: string;

  @Metadata({ data: "json, name=EndDate" })
  endDate: string;

  @Metadata({ data: "json, name=Hours" })
  hours?: number;

  @Metadata({ data: "json, name=StartDate" })
  startDate: string;

  @Metadata({ data: "json, name=Status" })
  status?: TimesheetStatusEnum;

  @Metadata({ data: "json, name=TimesheetID" })
  timesheetId?: string;

  @Metadata({ data: "json, name=TimesheetLines", elemType: shared.TimesheetLine })
  timesheetLines?: TimesheetLine[];

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=ValidationErrors", elemType: shared.ValidationError })
  validationErrors?: ValidationError[];
}
