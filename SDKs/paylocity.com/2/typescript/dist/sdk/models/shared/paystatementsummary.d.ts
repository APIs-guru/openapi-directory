import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The pay statement summary model
**/
export declare class PayStatementSummary extends SpeakeasyBase {
    autoPay?: boolean;
    beginDate?: string;
    checkDate?: string;
    checkNumber?: number;
    directDepositAmount?: number;
    endDate?: string;
    grossPay?: number;
    hours?: number;
    netCheck?: number;
    netPay?: number;
    overtimeDollars?: number;
    overtimeHours?: number;
    process?: number;
    regularDollars?: number;
    regularHours?: number;
    transactionNumber?: number;
    voucherNumber?: number;
    workersCompCode?: string;
    year?: number;
}
