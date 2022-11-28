import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeductionLine } from "./deductionline";
import { EarningsLine } from "./earningsline";
import { LeaveLine } from "./leaveline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperLine } from "./superline";



export class PayTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeductionLines", elemType: DeductionLine })
  deductionLines?: DeductionLine[];

  @SpeakeasyMetadata({ data: "json, name=EarningsLines", elemType: EarningsLine })
  earningsLines?: EarningsLine[];

  @SpeakeasyMetadata({ data: "json, name=LeaveLines", elemType: LeaveLine })
  leaveLines?: LeaveLine[];

  @SpeakeasyMetadata({ data: "json, name=ReimbursementLines", elemType: ReimbursementLine })
  reimbursementLines?: ReimbursementLine[];

  @SpeakeasyMetadata({ data: "json, name=SuperLines", elemType: SuperLine })
  superLines?: SuperLine[];
}
