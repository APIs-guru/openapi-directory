import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeductionLine } from "./deductionline";
import { EarningsLine } from "./earningsline";
import { LeaveLine } from "./leaveline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperLine } from "./superline";


export class OpeningBalances extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeductionLines", elemType: shared.DeductionLine })
  deductionLines?: DeductionLine[];

  @Metadata({ data: "json, name=EarningsLines", elemType: shared.EarningsLine })
  earningsLines?: EarningsLine[];

  @Metadata({ data: "json, name=LeaveLines", elemType: shared.LeaveLine })
  leaveLines?: LeaveLine[];

  @Metadata({ data: "json, name=OpeningBalanceDate" })
  openingBalanceDate?: string;

  @Metadata({ data: "json, name=ReimbursementLines", elemType: shared.ReimbursementLine })
  reimbursementLines?: ReimbursementLine[];

  @Metadata({ data: "json, name=SuperLines", elemType: shared.SuperLine })
  superLines?: SuperLine[];

  @Metadata({ data: "json, name=Tax" })
  tax?: string;
}
