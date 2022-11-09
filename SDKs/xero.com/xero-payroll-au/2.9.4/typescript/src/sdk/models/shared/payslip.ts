import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeductionLine } from "./deductionline";
import { EarningsLine } from "./earningsline";
import { LeaveAccrualLine } from "./leaveaccrualline";
import { LeaveEarningsLine } from "./leaveearningsline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperannuationLine } from "./superannuationline";
import { TaxLine } from "./taxline";
import { EarningsLine } from "./earningsline";


export class Payslip extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeductionLines", elemType: shared.DeductionLine })
  deductionLines?: DeductionLine[];

  @Metadata({ data: "json, name=Deductions" })
  deductions?: number;

  @Metadata({ data: "json, name=EarningsLines", elemType: shared.EarningsLine })
  earningsLines?: EarningsLine[];

  @Metadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=LeaveAccrualLines", elemType: shared.LeaveAccrualLine })
  leaveAccrualLines?: LeaveAccrualLine[];

  @Metadata({ data: "json, name=LeaveEarningsLines", elemType: shared.LeaveEarningsLine })
  leaveEarningsLines?: LeaveEarningsLine[];

  @Metadata({ data: "json, name=NetPay" })
  netPay?: number;

  @Metadata({ data: "json, name=PayslipID" })
  payslipId?: string;

  @Metadata({ data: "json, name=ReimbursementLines", elemType: shared.ReimbursementLine })
  reimbursementLines?: ReimbursementLine[];

  @Metadata({ data: "json, name=Reimbursements" })
  reimbursements?: number;

  @Metadata({ data: "json, name=Super" })
  super?: number;

  @Metadata({ data: "json, name=SuperannuationLines", elemType: shared.SuperannuationLine })
  superannuationLines?: SuperannuationLine[];

  @Metadata({ data: "json, name=Tax" })
  tax?: number;

  @Metadata({ data: "json, name=TaxLines", elemType: shared.TaxLine })
  taxLines?: TaxLine[];

  @Metadata({ data: "json, name=TimesheetEarningsLines", elemType: shared.EarningsLine })
  timesheetEarningsLines?: EarningsLine[];

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=Wages" })
  wages?: number;
}
