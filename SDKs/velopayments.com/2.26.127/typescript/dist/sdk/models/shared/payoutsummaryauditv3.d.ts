import { SpeakeasyBase } from "../../../internal/utils";
import { FxSummaryV3 } from "./fxsummaryv3";
import { SourceAccountSummaryV3 } from "./sourceaccountsummaryv3";
import { PayoutStatusV3Enum } from "./payoutstatusv3enum";
export declare class PayoutSummaryAuditV3 extends SpeakeasyBase {
    fxSummaries?: FxSummaryV3[];
    instructedDateTime?: string;
    payorId?: string;
    payoutId: string;
    payoutMemo?: string;
    sourceAccountSummary?: SourceAccountSummaryV3[];
    status: PayoutStatusV3Enum;
    submittedDateTime: string;
    totalFailedPayments?: number;
    totalIncompletePayments?: number;
    totalPayments?: number;
    withdrawnDateTime?: string;
}
