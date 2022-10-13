package shared

type RetrieveBusinessBookingProfileResponse struct {
	BusinessBookingProfile *BusinessBookingProfile `json:"business_booking_profile"`
	Errors                 []Error                 `json:"errors"`
}
