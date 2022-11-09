import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AchClassEnum } from "./achclassenum";
import { BankTransferNetworkEnum } from "./banktransfernetworkenum";
import { BankTransferTypeEnum } from "./banktransfertypeenum";
/**
 * BankTransferCreateRequest defines the request schema for `/bank_transfer/create`
**/
export declare class BankTransferCreateRequest extends SpeakeasyBase {
    accessToken: string;
    accountId: string;
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
    secret?: string;
    type: BankTransferTypeEnum;
    user: Map<string, any>;
}
