import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationPaymentGetRequest defines the request schema for `/payment_initiation/payment/get`
**/
export declare class PaymentInitiationPaymentGetRequest extends SpeakeasyBase {
    clientId?: string;
    paymentId: string;
    secret?: string;
}
