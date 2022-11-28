import { SpeakeasyBase } from "../../../internal/utils";
import { DeductionLine } from "./deductionline";
import { EarningsLine } from "./earningsline";
import { LeaveLine } from "./leaveline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperLine } from "./superline";
export declare class PayTemplate extends SpeakeasyBase {
    deductionLines?: DeductionLine[];
    earningsLines?: EarningsLine[];
    leaveLines?: LeaveLine[];
    reimbursementLines?: ReimbursementLine[];
    superLines?: SuperLine[];
}
