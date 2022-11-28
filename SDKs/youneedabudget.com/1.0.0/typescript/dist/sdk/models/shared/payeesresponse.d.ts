import { SpeakeasyBase } from "../../../internal/utils";
import { Payee } from "./payee";
export declare class PayeesResponseData extends SpeakeasyBase {
    payees: Payee[];
    serverKnowledge: number;
}
export declare class PayeesResponse extends SpeakeasyBase {
    data: PayeesResponseData;
}
