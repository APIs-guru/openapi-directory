import { SpeakeasyBase } from "../../../internal/utils";
/**
 * BankTransferMigrateAccountRequest defines the request schema for `/bank_transfer/migrate_account`
**/
export declare class BankTransferMigrateAccountRequest extends SpeakeasyBase {
    accountNumber: string;
    accountType: string;
    clientId?: string;
    routingNumber: string;
    secret?: string;
}
