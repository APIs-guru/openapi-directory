import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FxSummaryV3 } from "./fxsummaryv3";
import { SourceAccountSummaryV3 } from "./sourceaccountsummaryv3";
import { PayoutStatusV3Enum } from "./payoutstatusv3enum";


export class PayoutSummaryAuditV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=fxSummaries", elemType: shared.FxSummaryV3 })
  fxSummaries?: FxSummaryV3[];

  @Metadata({ data: "json, name=instructedDateTime" })
  instructedDateTime?: string;

  @Metadata({ data: "json, name=payorId" })
  payorId?: string;

  @Metadata({ data: "json, name=payoutId" })
  payoutId: string;

  @Metadata({ data: "json, name=payoutMemo" })
  payoutMemo?: string;

  @Metadata({ data: "json, name=sourceAccountSummary", elemType: shared.SourceAccountSummaryV3 })
  sourceAccountSummary?: SourceAccountSummaryV3[];

  @Metadata({ data: "json, name=status" })
  status: PayoutStatusV3Enum;

  @Metadata({ data: "json, name=submittedDateTime" })
  submittedDateTime: string;

  @Metadata({ data: "json, name=totalFailedPayments" })
  totalFailedPayments?: number;

  @Metadata({ data: "json, name=totalIncompletePayments" })
  totalIncompletePayments?: number;

  @Metadata({ data: "json, name=totalPayments" })
  totalPayments?: number;

  @Metadata({ data: "json, name=withdrawnDateTime" })
  withdrawnDateTime?: string;
}
