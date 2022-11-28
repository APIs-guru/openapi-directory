import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentV3 } from "./paymentv3";
/**
 * List Payees Response Object
**/
export declare class PagedPaymentsResponseV3 extends SpeakeasyBase {
    content?: PaymentV3[];
    links?: any[];
    page?: any;
}
