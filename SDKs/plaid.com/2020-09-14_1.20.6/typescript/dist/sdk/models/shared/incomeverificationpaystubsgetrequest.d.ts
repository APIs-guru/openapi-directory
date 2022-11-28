import { SpeakeasyBase } from "../../../internal/utils";
/**
 * IncomeVerificationPaystubsGetRequest defines the request schema for `/income/verification/paystubs/get`.
**/
export declare class IncomeVerificationPaystubsGetRequest extends SpeakeasyBase {
    clientId?: string;
    incomeVerificationId: string;
    secret?: string;
}
