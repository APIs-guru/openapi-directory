import { SpeakeasyBase } from "../../../internal/utils";
import { Payee } from "./payee";
export declare class PayeeResponseData extends SpeakeasyBase {
    payee: Payee;
}
export declare class PayeeResponse extends SpeakeasyBase {
    data: PayeeResponseData;
}
