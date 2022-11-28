import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutPayeeV3 } from "./payoutpayeev3";
import { TransmissionTypeEnum } from "./transmissiontypeenum";
export declare enum PaymentV3StatusEnum {
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
export declare class PaymentV3 extends SpeakeasyBase {
    amount?: number;
    currency?: string;
    payee?: PayoutPayeeV3;
    paymentId: string;
    paymentMemo?: string;
    paymentMetadata?: string;
    payorPaymentId?: string;
    remoteId?: string;
    remoteSystemId?: string;
    sourceAccountName?: string;
    status?: PaymentV3StatusEnum;
    transmissionType?: TransmissionTypeEnum;
    withdrawable?: boolean;
}
