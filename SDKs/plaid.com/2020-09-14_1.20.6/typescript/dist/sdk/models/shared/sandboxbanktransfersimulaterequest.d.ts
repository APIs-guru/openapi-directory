import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * SandboxBankTransferSimulateRequest defines the request schema for `/sandbox/bank_transfer/simulate`
**/
export declare class SandboxBankTransferSimulateRequest extends SpeakeasyBase {
    bankTransferId: string;
    clientId?: string;
    eventType: string;
    failureReason?: Map<string, any>;
    secret?: string;
}
