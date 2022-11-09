import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AcceptedPaymentV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=currencyType" })
  currencyType: string;

  @Metadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @Metadata({ data: "json, name=paymentMetadata" })
  paymentMetadata?: string;

  @Metadata({ data: "json, name=payorPaymentId" })
  payorPaymentId: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId: string;

  @Metadata({ data: "json, name=remoteSystemId" })
  remoteSystemId?: string;

  @Metadata({ data: "json, name=sourceAccountName" })
  sourceAccountName: string;
}
