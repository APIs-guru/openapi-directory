import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkTokenCreateRequestDepositSwitch
/** 
 * Specifies options for initializing Link for use with the Deposit Switch (beta) product. This field is required if `deposit_switch` is included in the `products` array.
**/
export class LinkTokenCreateRequestDepositSwitch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deposit_switch_id" })
  depositSwitchId: string;
}
