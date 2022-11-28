import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentResponseV4 } from "./paymentresponsev4";
/**
 * List Payments for payout
**/
export declare class GetPaymentsForPayoutResponseV4 extends SpeakeasyBase {
    content?: PaymentResponseV4[];
    links?: any[];
    page?: any;
    summary?: any;
}
