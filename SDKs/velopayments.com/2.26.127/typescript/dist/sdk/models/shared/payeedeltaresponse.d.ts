import { SpeakeasyBase } from "../../../internal/utils";
import { PayeeDelta } from "./payeedelta";
/**
 * List Payee Changes Response Object
**/
export declare class PayeeDeltaResponse extends SpeakeasyBase {
    content?: PayeeDelta[];
    links?: any[];
    page?: any;
}
