import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BankTransferDirectionEnum } from "./banktransferdirectionenum";
/**
 * BankTransferListRequest defines the request schema for `/bank_transfer/list`
**/
export declare class BankTransferListRequest extends SpeakeasyBase {
    clientId?: string;
    count?: number;
    direction?: BankTransferDirectionEnum;
    endDate?: Date;
    offset?: number;
    originationAccountId?: string;
    secret?: string;
    startDate?: Date;
}
