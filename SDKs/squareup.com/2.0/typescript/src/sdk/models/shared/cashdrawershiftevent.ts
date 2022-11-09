import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


export class CashDrawerShiftEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=event_money" })
  eventMoney?: Money;

  @Metadata({ data: "json, name=event_type" })
  eventType?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
