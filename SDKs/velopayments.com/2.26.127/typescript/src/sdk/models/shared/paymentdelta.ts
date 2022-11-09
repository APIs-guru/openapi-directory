import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PaymentDelta extends SpeakeasyBase {
  @Metadata({ data: "json, name=paymentAmount" })
  paymentAmount?: number;

  @Metadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: string;

  @Metadata({ data: "json, name=paymentId" })
  paymentId: string;

  @Metadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @Metadata({ data: "json, name=payoutId" })
  payoutId: string;

  @Metadata({ data: "json, name=sourceAmount" })
  sourceAmount?: number;

  @Metadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
