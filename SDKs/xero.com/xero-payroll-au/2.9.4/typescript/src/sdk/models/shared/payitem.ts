import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeductionType } from "./deductiontype";
import { EarningsRate } from "./earningsrate";
import { LeaveType } from "./leavetype";
import { ReimbursementType } from "./reimbursementtype";


export class PayItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeductionTypes", elemType: shared.DeductionType })
  deductionTypes?: DeductionType[];

  @Metadata({ data: "json, name=EarningsRates", elemType: shared.EarningsRate })
  earningsRates?: EarningsRate[];

  @Metadata({ data: "json, name=LeaveTypes", elemType: shared.LeaveType })
  leaveTypes?: LeaveType[];

  @Metadata({ data: "json, name=ReimbursementTypes", elemType: shared.ReimbursementType })
  reimbursementTypes?: ReimbursementType[];
}
