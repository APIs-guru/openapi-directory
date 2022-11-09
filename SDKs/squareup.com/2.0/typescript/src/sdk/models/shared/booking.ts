import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppointmentSegment } from "./appointmentsegment";


// Booking
/** 
 * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
 * at a given location to a requesting customer in one or more appointment segments.
**/
export class Booking extends SpeakeasyBase {
  @Metadata({ data: "json, name=appointment_segments", elemType: shared.AppointmentSegment })
  appointmentSegments?: AppointmentSegment[];

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=customer_note" })
  customerNote?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=seller_note" })
  sellerNote?: string;

  @Metadata({ data: "json, name=start_at" })
  startAt?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
