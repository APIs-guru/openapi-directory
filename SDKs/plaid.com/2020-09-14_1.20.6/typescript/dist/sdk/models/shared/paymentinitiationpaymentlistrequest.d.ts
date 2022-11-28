import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationPaymentListRequest defines the request schema for `/payment_initiation/payment/list`
**/
export declare class PaymentInitiationPaymentListRequest extends SpeakeasyBase {
    clientId?: string;
    count?: number;
    cursor?: string;
    secret?: string;
}
