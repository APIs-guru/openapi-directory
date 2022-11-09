import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvestmentsTransactionsGetRequestOptions
/** 
 * An optional object to filter `/investments/transactions/get` results. If provided, must be non-`null`.
**/
export class InvestmentsTransactionsGetRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ids" })
  accountIds?: string[];

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;
}
