import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DepositSwitchTokenCreateRequest
/** 
 * DepositSwitchTokenCreateRequest defines the request schema for `/deposit_switch/token/create`
**/
export class DepositSwitchTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=deposit_switch_id" })
  depositSwitchId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
