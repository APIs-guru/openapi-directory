import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";
/**
 * The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.
**/
export declare class EndBalance extends SpeakeasyBase {
    amount?: number;
    creditDebitIndicator?: CreditDebitIndicatorEnum;
}
