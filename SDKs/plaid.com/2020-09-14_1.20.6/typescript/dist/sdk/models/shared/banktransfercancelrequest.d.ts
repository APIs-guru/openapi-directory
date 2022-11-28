import { SpeakeasyBase } from "../../../internal/utils";
/**
 * BankTransferCancelRequest defines the request schema for `/bank_transfer/cancel`
**/
export declare class BankTransferCancelRequest extends SpeakeasyBase {
    bankTransferId: string;
    clientId?: string;
    secret?: string;
}
