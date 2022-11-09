import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * IncomeVerificationRefreshRequest defines the request schema for `/income/verification/refresh`
**/
export declare class IncomeVerificationRefreshRequest extends SpeakeasyBase {
    clientId?: string;
    incomeVerificationId: string;
    secret?: string;
}
