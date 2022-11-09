import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * IncomeVerificationCreateRequest defines the request schema for `/income/verification/create`
**/
export declare class IncomeVerificationCreateRequest extends SpeakeasyBase {
    clientId?: string;
    secret?: string;
    webhook: string;
}
