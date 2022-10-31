package shared

type RetrieveBusinessBookingProfileResponse struct {
	BusinessBookingProfile *BusinessBookingProfile `json:"business_booking_profile,omitempty"`
	Errors                 []Error                 `json:"errors,omitempty"`
}
