import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DepositSwitchCreateRequestOptions
/** 
 * Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
**/
export class DepositSwitchCreateRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=transaction_item_access_tokens" })
  transactionItemAccessTokens?: string[];

  @Metadata({ data: "json, name=webhook" })
  webhook?: string;
}
