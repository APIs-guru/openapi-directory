import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";


// OrderFulfillmentRecipient
/** 
 * Contains information about the recipient of a fulfillment.
**/
export class OrderFulfillmentRecipient extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}
