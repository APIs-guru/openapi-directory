import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcceptedPaymentV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currencyType" })
  currencyType: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMetadata" })
  paymentMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=payorPaymentId" })
  payorPaymentId: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId: string;

  @SpeakeasyMetadata({ data: "json, name=remoteSystemId" })
  remoteSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountName" })
  sourceAccountName: string;
}
