import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvestmentsTransactionsGetRequestOptions
/** 
 * An optional object to filter `/investments/transactions/get` results. If provided, must be non-`null`.
**/
export class InvestmentsTransactionsGetRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_ids" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;
}
