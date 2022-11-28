import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentResponseV3 } from "./paymentresponsev3";
/**
 * List Payments for payout
**/
export declare class GetPaymentsForPayoutResponseV3 extends SpeakeasyBase {
    content?: PaymentResponseV3[];
    links?: any[];
    page?: any;
    summary?: any;
}
