import { SpeakeasyBase } from "../../../internal/utils";
import { AchClassEnum } from "./achclassenum";
import { BankTransferNetworkEnum } from "./banktransfernetworkenum";
import { BankTransferTypeEnum } from "./banktransfertypeenum";
/**
 * ProcessorBankTransferCreateRequest defines the request schema for `/processor/bank_transfer/create`
**/
export declare class ProcessorBankTransferCreateRequest extends SpeakeasyBase {
    achClass?: AchClassEnum;
    amount: string;
    clientId?: string;
    customTag?: string;
    description: string;
    idempotencyKey: string;
    isoCurrencyCode: string;
    metadata?: Map<string, string>;
    network: BankTransferNetworkEnum;
    originationAccountId?: string;
    processorToken: string;
    secret?: string;
    type: BankTransferTypeEnum;
    user: Map<string, any>;
}
