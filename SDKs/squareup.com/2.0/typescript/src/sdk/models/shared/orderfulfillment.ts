import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderFulfillmentPickupDetails } from "./orderfulfillmentpickupdetails";
import { OrderFulfillmentShipmentDetails } from "./orderfulfillmentshipmentdetails";


// OrderFulfillment
/** 
 * Contains details about how to fulfill this order.
**/
export class OrderFulfillment extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=pickup_details" })
  pickupDetails?: OrderFulfillmentPickupDetails;

  @Metadata({ data: "json, name=shipment_details" })
  shipmentDetails?: OrderFulfillmentShipmentDetails;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
