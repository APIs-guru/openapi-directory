import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GiftCardActivityBlock
/** 
 * Describes a gift card activity of the BLOCK type.
**/
export class GiftCardActivityBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason: any;
}
