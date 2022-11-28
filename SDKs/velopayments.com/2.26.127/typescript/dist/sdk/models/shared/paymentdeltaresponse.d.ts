import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDelta } from "./paymentdelta";
/**
 * List Payment Changes Response Object
**/
export declare class PaymentDeltaResponse extends SpeakeasyBase {
    content?: PaymentDelta[];
    links?: any[];
    page?: any;
}
