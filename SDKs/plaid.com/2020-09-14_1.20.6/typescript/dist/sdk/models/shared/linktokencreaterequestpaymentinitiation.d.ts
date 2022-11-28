import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for initializing Link for use with the Payment Initiation (Europe) product. This field is required if `payment_initiation` is included in the `products` array.
**/
export declare class LinkTokenCreateRequestPaymentInitiation extends SpeakeasyBase {
    paymentId: string;
}
