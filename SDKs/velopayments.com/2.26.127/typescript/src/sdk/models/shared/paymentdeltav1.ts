import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaymentDeltaV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paymentAmount" })
  paymentAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId: string;

  @SpeakeasyMetadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutId" })
  payoutId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAmount" })
  sourceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
