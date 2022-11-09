import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An optional object to filter `/investments/transactions/get` results. If provided, must be non-`null`.
**/
export declare class InvestmentsTransactionsGetRequestOptions extends SpeakeasyBase {
    accountIds?: string[];
    count?: number;
    offset?: number;
}
