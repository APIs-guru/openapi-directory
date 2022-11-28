import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeductionLine } from "./deductionline";
import { EarningsLine } from "./earningsline";
import { LeaveAccrualLine } from "./leaveaccrualline";
import { LeaveEarningsLine } from "./leaveearningsline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperannuationLine } from "./superannuationline";
import { TaxLine } from "./taxline";



export class Payslip extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeductionLines", elemType: DeductionLine })
  deductionLines?: DeductionLine[];

  @SpeakeasyMetadata({ data: "json, name=Deductions" })
  deductions?: number;

  @SpeakeasyMetadata({ data: "json, name=EarningsLines", elemType: EarningsLine })
  earningsLines?: EarningsLine[];

  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=LeaveAccrualLines", elemType: LeaveAccrualLine })
  leaveAccrualLines?: LeaveAccrualLine[];

  @SpeakeasyMetadata({ data: "json, name=LeaveEarningsLines", elemType: LeaveEarningsLine })
  leaveEarningsLines?: LeaveEarningsLine[];

  @SpeakeasyMetadata({ data: "json, name=NetPay" })
  netPay?: number;

  @SpeakeasyMetadata({ data: "json, name=PayslipID" })
  payslipId?: string;

  @SpeakeasyMetadata({ data: "json, name=ReimbursementLines", elemType: ReimbursementLine })
  reimbursementLines?: ReimbursementLine[];

  @SpeakeasyMetadata({ data: "json, name=Reimbursements" })
  reimbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=Super" })
  super?: number;

  @SpeakeasyMetadata({ data: "json, name=SuperannuationLines", elemType: SuperannuationLine })
  superannuationLines?: SuperannuationLine[];

  @SpeakeasyMetadata({ data: "json, name=Tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxLines", elemType: TaxLine })
  taxLines?: TaxLine[];

  @SpeakeasyMetadata({ data: "json, name=TimesheetEarningsLines", elemType: EarningsLine })
  timesheetEarningsLines?: EarningsLine[];

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=Wages" })
  wages?: number;
}
