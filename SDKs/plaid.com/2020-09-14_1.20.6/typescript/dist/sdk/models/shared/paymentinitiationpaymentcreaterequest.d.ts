import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * PaymentInitiationPaymentCreateRequest defines the request schema for `/payment_initiation/payment/create`
**/
export declare class PaymentInitiationPaymentCreateRequest extends SpeakeasyBase {
    amount: Map<string, any>;
    clientId?: string;
    options?: Map<string, any>;
    recipientId: string;
    reference: string;
    schedule?: Map<string, any>;
    secret?: string;
}
