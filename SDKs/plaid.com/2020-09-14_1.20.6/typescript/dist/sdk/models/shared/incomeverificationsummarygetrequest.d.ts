import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * IncomeVerificationSummaryGetRequest defines the request schema for `/income/verification/summary/get`.
**/
export declare class IncomeVerificationSummaryGetRequest extends SpeakeasyBase {
    clientId?: string;
    incomeVerificationId: string;
    secret?: string;
}
