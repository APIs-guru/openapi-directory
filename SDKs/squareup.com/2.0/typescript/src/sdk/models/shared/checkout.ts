import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalRecipient } from "./additionalrecipient";
import { Order } from "./order";
import { Address } from "./address";


// Checkout
/** 
 * Square Checkout lets merchants accept online payments for supported
 * payment types using a checkout workflow hosted on squareup.com.
**/
export class Checkout extends SpeakeasyBase {
  @Metadata({ data: "json, name=additional_recipients", elemType: shared.AdditionalRecipient })
  additionalRecipients?: AdditionalRecipient[];

  @Metadata({ data: "json, name=ask_for_shipping_address" })
  askForShippingAddress?: boolean;

  @Metadata({ data: "json, name=checkout_page_url" })
  checkoutPageUrl?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=merchant_support_email" })
  merchantSupportEmail?: string;

  @Metadata({ data: "json, name=order" })
  order?: Order;

  @Metadata({ data: "json, name=pre_populate_buyer_email" })
  prePopulateBuyerEmail?: string;

  @Metadata({ data: "json, name=pre_populate_shipping_address" })
  prePopulateShippingAddress?: Address;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;
}
