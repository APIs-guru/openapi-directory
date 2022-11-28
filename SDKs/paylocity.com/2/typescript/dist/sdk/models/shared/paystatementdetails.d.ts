import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The pay statement details model
**/
export declare class PayStatementDetails extends SpeakeasyBase {
    amount?: number;
    checkDate?: string;
    det?: string;
    detCode?: string;
    detType?: string;
    eligibleCompensation?: number;
    hours?: number;
    rate?: number;
    transactionNumber?: number;
    transactionType?: string;
    year?: number;
}
