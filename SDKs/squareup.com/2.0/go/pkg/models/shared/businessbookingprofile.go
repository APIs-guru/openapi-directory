package shared

type BusinessBookingProfile struct {
	AllowUserCancel             *bool                        `json:"allow_user_cancel"`
	BookingEnabled              *bool                        `json:"booking_enabled"`
	BookingPolicy               *string                      `json:"booking_policy"`
	BusinessAppointmentSettings *BusinessAppointmentSettings `json:"business_appointment_settings"`
	CreatedAt                   *string                      `json:"created_at"`
	CustomerTimezoneChoice      *string                      `json:"customer_timezone_choice"`
	SellerID                    *string                      `json:"seller_id"`
}
