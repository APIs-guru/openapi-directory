import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderFulfillmentRecipient } from "./orderfulfillmentrecipient";


// OrderFulfillmentShipmentDetails
/** 
 * Contains the details necessary to fulfill a shipment order.
**/
export class OrderFulfillmentShipmentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancel_reason" })
  cancelReason?: string;

  @Metadata({ data: "json, name=canceled_at" })
  canceledAt?: string;

  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=expected_shipped_at" })
  expectedShippedAt?: string;

  @Metadata({ data: "json, name=failed_at" })
  failedAt?: string;

  @Metadata({ data: "json, name=failure_reason" })
  failureReason?: string;

  @Metadata({ data: "json, name=in_progress_at" })
  inProgressAt?: string;

  @Metadata({ data: "json, name=packaged_at" })
  packagedAt?: string;

  @Metadata({ data: "json, name=placed_at" })
  placedAt?: string;

  @Metadata({ data: "json, name=recipient" })
  recipient?: OrderFulfillmentRecipient;

  @Metadata({ data: "json, name=shipped_at" })
  shippedAt?: string;

  @Metadata({ data: "json, name=shipping_note" })
  shippingNote?: string;

  @Metadata({ data: "json, name=shipping_type" })
  shippingType?: string;

  @Metadata({ data: "json, name=tracking_number" })
  trackingNumber?: string;

  @Metadata({ data: "json, name=tracking_url" })
  trackingUrl?: string;
}
