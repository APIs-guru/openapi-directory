import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationPaymentTokenCreateRequest defines the request schema for `/payment_initiation/payment/token/create`
**/
export declare class PaymentInitiationPaymentTokenCreateRequest extends SpeakeasyBase {
    clientId?: string;
    paymentId: string;
    secret?: string;
}
