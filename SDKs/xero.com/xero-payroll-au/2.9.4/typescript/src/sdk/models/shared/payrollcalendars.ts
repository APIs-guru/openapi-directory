import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayrollCalendar } from "./payrollcalendar";


export class PayrollCalendars extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayrollCalendars", elemType: shared.PayrollCalendar })
  payrollCalendars?: PayrollCalendar[];
}
