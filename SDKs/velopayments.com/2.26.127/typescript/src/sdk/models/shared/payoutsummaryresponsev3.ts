import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcceptedPaymentV3 } from "./acceptedpaymentv3";
import { SourceAccountV3 } from "./sourceaccountv3";
import { QuoteFxSummaryV3 } from "./quotefxsummaryv3";
import { RejectedPaymentV3 } from "./rejectedpaymentv3";


export class PayoutSummaryResponseV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptedPayments", elemType: shared.AcceptedPaymentV3 })
  acceptedPayments: AcceptedPaymentV3[];

  @Metadata({ data: "json, name=accounts", elemType: shared.SourceAccountV3 })
  accounts: SourceAccountV3[];

  @Metadata({ data: "json, name=fxSummaries", elemType: shared.QuoteFxSummaryV3 })
  fxSummaries: QuoteFxSummaryV3[];

  @Metadata({ data: "json, name=paymentsAccepted" })
  paymentsAccepted?: number;

  @Metadata({ data: "json, name=paymentsRejected" })
  paymentsRejected?: number;

  @Metadata({ data: "json, name=paymentsSubmitted" })
  paymentsSubmitted?: number;

  @Metadata({ data: "json, name=paymentsWithdrawn" })
  paymentsWithdrawn: number;

  @Metadata({ data: "json, name=payoutId" })
  payoutId?: string;

  @Metadata({ data: "json, name=rejectedPayments", elemType: shared.RejectedPaymentV3 })
  rejectedPayments: RejectedPaymentV3[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}
