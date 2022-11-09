import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RejectedPaymentV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=currencyType" })
  currencyType: string;

  @Metadata({ data: "json, name=lineNumber" })
  lineNumber?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=paymentMetadata" })
  paymentMetadata?: string;

  @Metadata({ data: "json, name=payorPaymentId" })
  payorPaymentId: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId: string;

  @Metadata({ data: "json, name=remoteSystemId" })
  remoteSystemId?: string;

  @Metadata({ data: "json, name=sourceAccountName" })
  sourceAccountName: string;
}
