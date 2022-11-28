import { SpeakeasyBase } from "../../../internal/utils";
import { FxSummary } from "./fxsummary";
import { PayoutTypeEnum } from "./payouttypeenum";
import { SourceAccountSummary } from "./sourceaccountsummary";
import { PayoutStatusEnum } from "./payoutstatusenum";
export declare class PayoutSummaryAudit extends SpeakeasyBase {
    dateTime?: Date;
    fxSummaries?: FxSummary[];
    instructedDateTime?: string;
    payorId?: string;
    payorName: string;
    payoutId?: string;
    payoutMemo?: string;
    payoutType: PayoutTypeEnum;
    sourceAccountSummary?: SourceAccountSummary[];
    status: PayoutStatusEnum;
    submittedDateTime: string;
    totalIncompletePayments?: number;
    totalPayments?: number;
    totalReturnedPayments?: number;
    totalWithdrawnPayments?: number;
    withdrawnDateTime?: Date;
}
