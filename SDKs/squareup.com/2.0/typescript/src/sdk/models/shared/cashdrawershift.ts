import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { CashDrawerDevice } from "./cashdrawerdevice";
import { Money } from "./money";
import { Money } from "./money";


// CashDrawerShift
/** 
 * This model gives the details of a cash drawer shift.
 * The cash_payment_money, cash_refund_money, cash_paid_in_money,
 * and cash_paid_out_money fields are all computed by summing their respective
 * event types.
**/
export class CashDrawerShift extends SpeakeasyBase {
  @Metadata({ data: "json, name=cash_paid_in_money" })
  cashPaidInMoney?: Money;

  @Metadata({ data: "json, name=cash_paid_out_money" })
  cashPaidOutMoney?: Money;

  @Metadata({ data: "json, name=cash_payment_money" })
  cashPaymentMoney?: Money;

  @Metadata({ data: "json, name=cash_refunds_money" })
  cashRefundsMoney?: Money;

  @Metadata({ data: "json, name=closed_at" })
  closedAt?: string;

  @Metadata({ data: "json, name=closed_cash_money" })
  closedCashMoney?: Money;

  @Metadata({ data: "json, name=closing_employee_id" })
  closingEmployeeId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device?: CashDrawerDevice;

  @Metadata({ data: "json, name=employee_ids" })
  employeeIds?: string[];

  @Metadata({ data: "json, name=ended_at" })
  endedAt?: string;

  @Metadata({ data: "json, name=ending_employee_id" })
  endingEmployeeId?: string;

  @Metadata({ data: "json, name=expected_cash_money" })
  expectedCashMoney?: Money;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=opened_at" })
  openedAt?: string;

  @Metadata({ data: "json, name=opened_cash_money" })
  openedCashMoney?: Money;

  @Metadata({ data: "json, name=opening_employee_id" })
  openingEmployeeId?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
