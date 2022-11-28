import { SpeakeasyBase } from "../../../internal/utils";
import { DeductionTypeInput } from "./deductiontype";
import { EarningsRateInput } from "./earningsrate";
import { LeaveTypeInput } from "./leavetype";
import { ReimbursementTypeInput } from "./reimbursementtype";
import { DeductionType } from "./deductiontype";
import { EarningsRate } from "./earningsrate";
import { LeaveType } from "./leavetype";
import { ReimbursementType } from "./reimbursementtype";
export declare class PayItemInput extends SpeakeasyBase {
    deductionTypes?: DeductionTypeInput[];
    earningsRates?: EarningsRateInput[];
    leaveTypes?: LeaveTypeInput[];
    reimbursementTypes?: ReimbursementTypeInput[];
}
export declare class PayItem extends SpeakeasyBase {
    deductionTypes?: DeductionType[];
    earningsRates?: EarningsRate[];
    leaveTypes?: LeaveType[];
    reimbursementTypes?: ReimbursementType[];
}
