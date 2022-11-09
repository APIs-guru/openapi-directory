import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DepositSwitchTokenCreateRequest
/** 
 * DepositSwitchTokenCreateRequest defines the request schema for `/deposit_switch/token/create`
**/
export class DepositSwitchTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=deposit_switch_id" })
  depositSwitchId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
