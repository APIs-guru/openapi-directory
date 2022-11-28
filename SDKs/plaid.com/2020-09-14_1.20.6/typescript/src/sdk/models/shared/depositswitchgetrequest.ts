import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DepositSwitchGetRequest
/** 
 * DepositSwitchGetRequest defines the request schema for `/deposit_switch/get`
**/
export class DepositSwitchGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=deposit_switch_id" })
  depositSwitchId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
