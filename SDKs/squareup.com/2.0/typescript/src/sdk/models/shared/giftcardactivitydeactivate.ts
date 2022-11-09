import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GiftCardActivityDeactivate
/** 
 * Describes a gift card activity of the DEACTIVATE type.
**/
export class GiftCardActivityDeactivate extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason: any;
}
