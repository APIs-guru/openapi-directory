import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionsGetRequestOptions } from "./transactionsgetrequestoptions";
/**
 * TransactionsGetRequest defines the request schema for `/transactions/get`
**/
export declare class TransactionsGetRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    endDate: Date;
    options?: TransactionsGetRequestOptions;
    secret?: string;
    startDate: Date;
}
