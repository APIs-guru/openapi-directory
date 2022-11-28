import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FxSummaryV3 } from "./fxsummaryv3";
import { SourceAccountSummaryV3 } from "./sourceaccountsummaryv3";
import { PayoutStatusV3Enum } from "./payoutstatusv3enum";



export class PayoutSummaryAuditV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fxSummaries", elemType: FxSummaryV3 })
  fxSummaries?: FxSummaryV3[];

  @SpeakeasyMetadata({ data: "json, name=instructedDateTime" })
  instructedDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutId" })
  payoutId: string;

  @SpeakeasyMetadata({ data: "json, name=payoutMemo" })
  payoutMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountSummary", elemType: SourceAccountSummaryV3 })
  sourceAccountSummary?: SourceAccountSummaryV3[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PayoutStatusV3Enum;

  @SpeakeasyMetadata({ data: "json, name=submittedDateTime" })
  submittedDateTime: string;

  @SpeakeasyMetadata({ data: "json, name=totalFailedPayments" })
  totalFailedPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=totalIncompletePayments" })
  totalIncompletePayments?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPayments" })
  totalPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=withdrawnDateTime" })
  withdrawnDateTime?: string;
}
