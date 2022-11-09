import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GiftCardActivityUnblock
/** 
 * Present only when `GiftCardActivityType` is UNBLOCK.
**/
export class GiftCardActivityUnblock extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason: any;
}
