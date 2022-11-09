import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BusinessAppointmentSettings } from "./businessappointmentsettings";


export class BusinessBookingProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_user_cancel" })
  allowUserCancel?: boolean;

  @Metadata({ data: "json, name=booking_enabled" })
  bookingEnabled?: boolean;

  @Metadata({ data: "json, name=booking_policy" })
  bookingPolicy?: string;

  @Metadata({ data: "json, name=business_appointment_settings" })
  businessAppointmentSettings?: BusinessAppointmentSettings;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=customer_timezone_choice" })
  customerTimezoneChoice?: string;

  @Metadata({ data: "json, name=seller_id" })
  sellerId?: string;
}
