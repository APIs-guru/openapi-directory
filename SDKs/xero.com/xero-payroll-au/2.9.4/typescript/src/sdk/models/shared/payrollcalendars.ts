import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayrollCalendar } from "./payrollcalendar";



export class PayrollCalendars extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayrollCalendars", elemType: PayrollCalendar })
  payrollCalendars?: PayrollCalendar[];
}
