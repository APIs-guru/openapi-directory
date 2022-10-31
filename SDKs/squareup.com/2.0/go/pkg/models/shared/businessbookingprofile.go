package shared

type BusinessBookingProfile struct {
	AllowUserCancel             *bool                        `json:"allow_user_cancel,omitempty"`
	BookingEnabled              *bool                        `json:"booking_enabled,omitempty"`
	BookingPolicy               *string                      `json:"booking_policy,omitempty"`
	BusinessAppointmentSettings *BusinessAppointmentSettings `json:"business_appointment_settings,omitempty"`
	CreatedAt                   *string                      `json:"created_at,omitempty"`
	CustomerTimezoneChoice      *string                      `json:"customer_timezone_choice,omitempty"`
	SellerID                    *string                      `json:"seller_id,omitempty"`
}
