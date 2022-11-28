import { SpeakeasyBase } from "../../../internal/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";
/**
 * the lines details for a statement
**/
export declare class StatementLine extends SpeakeasyBase {
    amount?: number;
    chequeNumber?: string;
    creditDebitIndicator?: CreditDebitIndicatorEnum;
    description?: string;
    payeeName?: string;
    postedDate?: Date;
    reference?: string;
    transactionId?: string;
}
