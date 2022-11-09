import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvestmentHoldingsGetRequestOptions
/** 
 * An optional object to filter `/investments/holdings/get` results. If provided, must not be `null`.
**/
export class InvestmentHoldingsGetRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ids" })
  accountIds?: string[];
}
