import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * TransactionsRefreshRequest defines the request schema for `/transactions/refresh`
**/
export declare class TransactionsRefreshRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    secret?: string;
}
