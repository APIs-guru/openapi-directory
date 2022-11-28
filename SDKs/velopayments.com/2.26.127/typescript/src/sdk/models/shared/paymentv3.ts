import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayoutPayeeV3 } from "./payoutpayeev3";
import { TransmissionTypeEnum } from "./transmissiontypeenum";


export enum PaymentV3StatusEnum {
    Submitted = "SUBMITTED",
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Withdrawn = "WITHDRAWN",
    Returned = "RETURNED",
    AwaitingFunds = "AWAITING_FUNDS",
    Funded = "FUNDED",
    Unfunded = "UNFUNDED",
    Cancelled = "CANCELLED",
    Requested = "REQUESTED"
}


export class PaymentV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=payee" })
  payee?: PayoutPayeeV3;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMetadata" })
  paymentMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteSystemId" })
  remoteSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountName" })
  sourceAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PaymentV3StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transmissionType" })
  transmissionType?: TransmissionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=withdrawable" })
  withdrawable?: boolean;
}
