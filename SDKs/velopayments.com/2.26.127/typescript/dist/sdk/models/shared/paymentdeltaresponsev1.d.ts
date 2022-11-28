import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDeltaV1 } from "./paymentdeltav1";
/**
 * List Payment Changes Response Object
**/
export declare class PaymentDeltaResponseV1 extends SpeakeasyBase {
    content?: PaymentDeltaV1[];
    links?: any[];
    page?: any;
}
