import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DepositSwitchCreateRequestOptions
/** 
 * Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
**/
export class DepositSwitchCreateRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction_item_access_tokens" })
  transactionItemAccessTokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}
