import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PayoutPayeeV3 } from "./payoutpayeev3";
import { TransmissionTypeEnum } from "./transmissiontypeenum";

export enum PaymentV3StatusEnum {
    Submitted = "SUBMITTED"
,    Accepted = "ACCEPTED"
,    Rejected = "REJECTED"
,    Withdrawn = "WITHDRAWN"
,    Returned = "RETURNED"
,    AwaitingFunds = "AWAITING_FUNDS"
,    Funded = "FUNDED"
,    Unfunded = "UNFUNDED"
,    Cancelled = "CANCELLED"
,    Requested = "REQUESTED"
}


export class PaymentV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=payee" })
  payee?: PayoutPayeeV3;

  @Metadata({ data: "json, name=paymentId" })
  paymentId: string;

  @Metadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @Metadata({ data: "json, name=paymentMetadata" })
  paymentMetadata?: string;

  @Metadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId?: string;

  @Metadata({ data: "json, name=remoteSystemId" })
  remoteSystemId?: string;

  @Metadata({ data: "json, name=sourceAccountName" })
  sourceAccountName?: string;

  @Metadata({ data: "json, name=status" })
  status?: PaymentV3StatusEnum;

  @Metadata({ data: "json, name=transmissionType" })
  transmissionType?: TransmissionTypeEnum;

  @Metadata({ data: "json, name=withdrawable" })
  withdrawable?: boolean;
}
