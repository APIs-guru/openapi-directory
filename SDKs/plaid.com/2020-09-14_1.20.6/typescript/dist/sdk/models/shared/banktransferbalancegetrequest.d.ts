import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * BankTransferBalanceGetRequest defines the request schema for `/bank_transfer/balance/get`
**/
export declare class BankTransferBalanceGetRequest extends SpeakeasyBase {
    clientId?: string;
    originationAccountId?: string;
    secret?: string;
}
