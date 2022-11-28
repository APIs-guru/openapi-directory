import { SpeakeasyBase } from "../../../internal/utils";
import { AcceptedPaymentV3 } from "./acceptedpaymentv3";
import { SourceAccountV3 } from "./sourceaccountv3";
import { QuoteFxSummaryV3 } from "./quotefxsummaryv3";
import { RejectedPaymentV3 } from "./rejectedpaymentv3";
export declare class PayoutSummaryResponseV3 extends SpeakeasyBase {
    acceptedPayments: AcceptedPaymentV3[];
    accounts: SourceAccountV3[];
    fxSummaries: QuoteFxSummaryV3[];
    paymentsAccepted?: number;
    paymentsRejected?: number;
    paymentsSubmitted?: number;
    paymentsWithdrawn: number;
    payoutId?: string;
    rejectedPayments: RejectedPaymentV3[];
    status?: string;
}
