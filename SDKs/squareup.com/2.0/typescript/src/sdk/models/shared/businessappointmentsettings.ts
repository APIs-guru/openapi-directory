import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// BusinessAppointmentSettings
/** 
 * The service appointment settings, including where and how the service is provided.
**/
export class BusinessAppointmentSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=alignment_time" })
  alignmentTime?: string;

  @Metadata({ data: "json, name=any_team_member_booking_enabled" })
  anyTeamMemberBookingEnabled?: boolean;

  @Metadata({ data: "json, name=cancellation_fee_money" })
  cancellationFeeMoney?: Money;

  @Metadata({ data: "json, name=cancellation_policy" })
  cancellationPolicy?: string;

  @Metadata({ data: "json, name=cancellation_policy_text" })
  cancellationPolicyText?: string;

  @Metadata({ data: "json, name=cancellation_window_seconds" })
  cancellationWindowSeconds?: number;

  @Metadata({ data: "json, name=location_types" })
  locationTypes?: string[];

  @Metadata({ data: "json, name=max_appointments_per_day_limit" })
  maxAppointmentsPerDayLimit?: number;

  @Metadata({ data: "json, name=max_appointments_per_day_limit_type" })
  maxAppointmentsPerDayLimitType?: string;

  @Metadata({ data: "json, name=max_booking_lead_time_seconds" })
  maxBookingLeadTimeSeconds?: number;

  @Metadata({ data: "json, name=min_booking_lead_time_seconds" })
  minBookingLeadTimeSeconds?: number;

  @Metadata({ data: "json, name=multiple_service_booking_enabled" })
  multipleServiceBookingEnabled?: boolean;

  @Metadata({ data: "json, name=skip_booking_flow_staff_selection" })
  skipBookingFlowStaffSelection?: boolean;
}
