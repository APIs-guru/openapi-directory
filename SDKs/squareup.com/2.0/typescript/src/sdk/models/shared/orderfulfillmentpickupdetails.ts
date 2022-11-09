import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderFulfillmentPickupDetailsCurbsidePickupDetails } from "./orderfulfillmentpickupdetailscurbsidepickupdetails";
import { OrderFulfillmentRecipient } from "./orderfulfillmentrecipient";


// OrderFulfillmentPickupDetails
/** 
 * Contains details necessary to fulfill a pickup order.
**/
export class OrderFulfillmentPickupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=accepted_at" })
  acceptedAt?: string;

  @Metadata({ data: "json, name=auto_complete_duration" })
  autoCompleteDuration?: string;

  @Metadata({ data: "json, name=cancel_reason" })
  cancelReason?: string;

  @Metadata({ data: "json, name=canceled_at" })
  canceledAt?: string;

  @Metadata({ data: "json, name=curbside_pickup_details" })
  curbsidePickupDetails?: OrderFulfillmentPickupDetailsCurbsidePickupDetails;

  @Metadata({ data: "json, name=expired_at" })
  expiredAt?: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @Metadata({ data: "json, name=is_curbside_pickup" })
  isCurbsidePickup?: boolean;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=picked_up_at" })
  pickedUpAt?: string;

  @Metadata({ data: "json, name=pickup_at" })
  pickupAt?: string;

  @Metadata({ data: "json, name=pickup_window_duration" })
  pickupWindowDuration?: string;

  @Metadata({ data: "json, name=placed_at" })
  placedAt?: string;

  @Metadata({ data: "json, name=prep_time_duration" })
  prepTimeDuration?: string;

  @Metadata({ data: "json, name=ready_at" })
  readyAt?: string;

  @Metadata({ data: "json, name=recipient" })
  recipient?: OrderFulfillmentRecipient;

  @Metadata({ data: "json, name=rejected_at" })
  rejectedAt?: string;

  @Metadata({ data: "json, name=schedule_type" })
  scheduleType?: string;
}
