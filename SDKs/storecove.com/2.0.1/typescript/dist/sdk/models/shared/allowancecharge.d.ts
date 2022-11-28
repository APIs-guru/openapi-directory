import { SpeakeasyBase } from "../../../internal/utils";
import { Tax } from "./tax";
export declare class AllowanceCharge extends SpeakeasyBase {
    amountExcludingVat: number;
    reason?: string;
    reasonCode?: string;
    tax: Tax;
    taxesDutiesFees?: Tax[];
}
