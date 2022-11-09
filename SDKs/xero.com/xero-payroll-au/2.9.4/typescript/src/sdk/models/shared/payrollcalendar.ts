import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CalendarTypeEnum } from "./calendartypeenum";
import { ValidationError } from "./validationerror";


export class PayrollCalendar extends SpeakeasyBase {
  @Metadata({ data: "json, name=CalendarType" })
  calendarType?: CalendarTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PaymentDate" })
  paymentDate?: string;

  @Metadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarId?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=ValidationErrors", elemType: shared.ValidationError })
  validationErrors?: ValidationError[];
}
