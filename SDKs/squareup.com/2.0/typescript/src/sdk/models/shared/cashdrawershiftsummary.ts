import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";


// CashDrawerShiftSummary
/** 
 * The summary of a closed cash drawer shift.
 * This model contains only the money counted to start a cash drawer shift, counted
 * at the end of the shift, and the amount that should be in the drawer at shift
 * end based on summing all cash drawer shift events.
**/
export class CashDrawerShiftSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_at" })
  closedAt?: string;

  @Metadata({ data: "json, name=closed_cash_money" })
  closedCashMoney?: Money;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ended_at" })
  endedAt?: string;

  @Metadata({ data: "json, name=expected_cash_money" })
  expectedCashMoney?: Money;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=opened_at" })
  openedAt?: string;

  @Metadata({ data: "json, name=opened_cash_money" })
  openedCashMoney?: Money;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
