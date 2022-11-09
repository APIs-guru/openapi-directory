import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransactionsGetRequestOptions
/** 
 * An optional object to be used with the request. If specified, `options` must not be `null`.
**/
export class TransactionsGetRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ids" })
  accountIds?: string[];

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=include_original_description" })
  includeOriginalDescription?: boolean;

  @Metadata({ data: "json, name=offset" })
  offset?: number;
}
