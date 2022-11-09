import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * BankTransferGetRequest defines the request schema for `/bank_transfer/get`
**/
export declare class BankTransferGetRequest extends SpeakeasyBase {
    bankTransferId: string;
    clientId?: string;
    secret?: string;
}
