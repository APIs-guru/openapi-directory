import { SpeakeasyBase } from "../../../internal/utils";
import { DeductionLine } from "./deductionline";
import { EarningsLine } from "./earningsline";
import { LeaveAccrualLine } from "./leaveaccrualline";
import { LeaveEarningsLine } from "./leaveearningsline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperannuationLine } from "./superannuationline";
import { TaxLine } from "./taxline";
export declare class PayslipLines extends SpeakeasyBase {
    deductionLines?: DeductionLine[];
    earningsLines?: EarningsLine[];
    leaveAccrualLines?: LeaveAccrualLine[];
    leaveEarningsLines?: LeaveEarningsLine[];
    reimbursementLines?: ReimbursementLine[];
    superannuationLines?: SuperannuationLine[];
    taxLines?: TaxLine[];
    timesheetEarningsLines?: EarningsLine[];
}
