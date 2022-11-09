import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnlinkCustomerFromGiftCardRequest
/** 
 * A request to unlink a customer to a gift card
**/
export class UnlinkCustomerFromGiftCardRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_id" })
  customerId: string;
}
