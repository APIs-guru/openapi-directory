import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalendarTypeEnum } from "./calendartypeenum";
import { ValidationError } from "./validationerror";



export class PayrollCalendarInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalendarType" })
  calendarType?: CalendarTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}


export class PayrollCalendar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalendarType" })
  calendarType?: CalendarTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}
