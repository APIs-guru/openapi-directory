import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GiftCardActivityClearBalance
/** 
 * Describes a gift card activity of the CLEAR_BALANCE type.
**/
export class GiftCardActivityClearBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason: any;
}
