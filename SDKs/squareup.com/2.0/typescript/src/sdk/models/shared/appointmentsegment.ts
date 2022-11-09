import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppointmentSegment
/** 
 * Defines an appointment segment of a booking.
**/
export class AppointmentSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration_minutes" })
  durationMinutes: number;

  @Metadata({ data: "json, name=service_variation_id" })
  serviceVariationId: string;

  @Metadata({ data: "json, name=service_variation_version" })
  serviceVariationVersion: number;

  @Metadata({ data: "json, name=team_member_id" })
  teamMemberId: string;
}
