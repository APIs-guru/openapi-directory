import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderFulfillmentPickupDetailsCurbsidePickupDetails
/** 
 * Specific details for curbside pickup.
**/
export class OrderFulfillmentPickupDetailsCurbsidePickupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyer_arrived_at" })
  buyerArrivedAt?: string;

  @Metadata({ data: "json, name=curbside_details" })
  curbsideDetails?: string;
}
