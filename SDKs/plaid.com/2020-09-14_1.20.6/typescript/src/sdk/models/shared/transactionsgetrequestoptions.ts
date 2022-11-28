import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransactionsGetRequestOptions
/** 
 * An optional object to be used with the request. If specified, `options` must not be `null`.
**/
export class TransactionsGetRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_ids" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=include_original_description" })
  includeOriginalDescription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;
}
