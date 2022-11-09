import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppointmentSegment } from "./appointmentsegment";


// Availability
/** 
 * Describes a slot available for booking, encapsulating appointment segments, the location and starting time.
**/
export class Availability extends SpeakeasyBase {
  @Metadata({ data: "json, name=appointment_segments", elemType: shared.AppointmentSegment })
  appointmentSegments?: AppointmentSegment[];

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=start_at" })
  startAt?: string;
}
