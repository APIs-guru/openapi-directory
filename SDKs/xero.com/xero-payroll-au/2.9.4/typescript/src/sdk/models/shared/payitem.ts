import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeductionTypeInput } from "./deductiontype";
import { EarningsRateInput } from "./earningsrate";
import { LeaveTypeInput } from "./leavetype";
import { ReimbursementTypeInput } from "./reimbursementtype";
import { DeductionType } from "./deductiontype";
import { EarningsRate } from "./earningsrate";
import { LeaveType } from "./leavetype";
import { ReimbursementType } from "./reimbursementtype";



export class PayItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeductionTypes", elemType: DeductionTypeInput })
  deductionTypes?: DeductionTypeInput[];

  @SpeakeasyMetadata({ data: "json, name=EarningsRates", elemType: EarningsRateInput })
  earningsRates?: EarningsRateInput[];

  @SpeakeasyMetadata({ data: "json, name=LeaveTypes", elemType: LeaveTypeInput })
  leaveTypes?: LeaveTypeInput[];

  @SpeakeasyMetadata({ data: "json, name=ReimbursementTypes", elemType: ReimbursementTypeInput })
  reimbursementTypes?: ReimbursementTypeInput[];
}


export class PayItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeductionTypes", elemType: DeductionType })
  deductionTypes?: DeductionType[];

  @SpeakeasyMetadata({ data: "json, name=EarningsRates", elemType: EarningsRate })
  earningsRates?: EarningsRate[];

  @SpeakeasyMetadata({ data: "json, name=LeaveTypes", elemType: LeaveType })
  leaveTypes?: LeaveType[];

  @SpeakeasyMetadata({ data: "json, name=ReimbursementTypes", elemType: ReimbursementType })
  reimbursementTypes?: ReimbursementType[];
}
