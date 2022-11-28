import { SpeakeasyBase } from "../../../internal/utils";
import { InvestmentsTransactionsGetRequestOptions } from "./investmentstransactionsgetrequestoptions";
/**
 * InvestmentsTransactionsGetRequest defines the request schema for `/investments/transactions/get`
**/
export declare class InvestmentsTransactionsGetRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    endDate: Date;
    options?: InvestmentsTransactionsGetRequestOptions;
    secret?: string;
    startDate: Date;
}
