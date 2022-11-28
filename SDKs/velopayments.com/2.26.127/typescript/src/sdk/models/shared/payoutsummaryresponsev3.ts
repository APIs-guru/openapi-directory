import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcceptedPaymentV3 } from "./acceptedpaymentv3";
import { SourceAccountV3 } from "./sourceaccountv3";
import { QuoteFxSummaryV3 } from "./quotefxsummaryv3";
import { RejectedPaymentV3 } from "./rejectedpaymentv3";



export class PayoutSummaryResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptedPayments", elemType: AcceptedPaymentV3 })
  acceptedPayments: AcceptedPaymentV3[];

  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: SourceAccountV3 })
  accounts: SourceAccountV3[];

  @SpeakeasyMetadata({ data: "json, name=fxSummaries", elemType: QuoteFxSummaryV3 })
  fxSummaries: QuoteFxSummaryV3[];

  @SpeakeasyMetadata({ data: "json, name=paymentsAccepted" })
  paymentsAccepted?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentsRejected" })
  paymentsRejected?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentsSubmitted" })
  paymentsSubmitted?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentsWithdrawn" })
  paymentsWithdrawn: number;

  @SpeakeasyMetadata({ data: "json, name=payoutId" })
  payoutId?: string;

  @SpeakeasyMetadata({ data: "json, name=rejectedPayments", elemType: RejectedPaymentV3 })
  rejectedPayments: RejectedPaymentV3[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
