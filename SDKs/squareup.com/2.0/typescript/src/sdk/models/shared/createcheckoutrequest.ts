import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChargeRequestAdditionalRecipient } from "./chargerequestadditionalrecipient";
import { CreateOrderRequest } from "./createorderrequest";
import { Address } from "./address";


// CreateCheckoutRequest
/** 
 * Defines the parameters that can be included in the body of
 * a request to the `CreateCheckout` endpoint.
**/
export class CreateCheckoutRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=additional_recipients", elemType: shared.ChargeRequestAdditionalRecipient })
  additionalRecipients?: ChargeRequestAdditionalRecipient[];

  @Metadata({ data: "json, name=ask_for_shipping_address" })
  askForShippingAddress?: boolean;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=merchant_support_email" })
  merchantSupportEmail?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=order" })
  order: CreateOrderRequest;

  @Metadata({ data: "json, name=pre_populate_buyer_email" })
  prePopulateBuyerEmail?: string;

  @Metadata({ data: "json, name=pre_populate_shipping_address" })
  prePopulateShippingAddress?: Address;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;
}
