import { SpeakeasyBase } from "../../../internal/utils";
/**
 * BankTransferEventSyncRequest defines the request schema for `/bank_transfer/event/sync`
**/
export declare class BankTransferEventSyncRequest extends SpeakeasyBase {
    afterId: number;
    clientId?: string;
    count?: number;
    secret?: string;
}
