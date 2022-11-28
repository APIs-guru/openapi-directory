import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaymentDeltaV1 extends SpeakeasyBase {
    paymentAmount?: number;
    paymentCurrency?: string;
    paymentId: string;
    payorPaymentId?: string;
    payoutId: string;
    sourceAmount?: number;
    sourceCurrency?: string;
    status?: string;
}
