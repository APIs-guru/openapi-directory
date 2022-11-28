import { SpeakeasyBase } from "../../../internal/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";
/**
 * The starting balance of the statement
**/
export declare class StartBalance extends SpeakeasyBase {
    amount?: number;
    creditDebitIndicator?: CreditDebitIndicatorEnum;
}
