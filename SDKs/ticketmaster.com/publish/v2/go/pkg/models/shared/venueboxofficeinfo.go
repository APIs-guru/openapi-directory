package shared

type VenueBoxOfficeInfo struct {
	AcceptedPaymentDetails map[string]string `json:"acceptedPaymentDetails"`
	OpenHoursDetails       map[string]string `json:"openHoursDetails"`
	PhoneNumberDetails     map[string]string `json:"phoneNumberDetails"`
	WillCallDetails        map[string]string `json:"willCallDetails"`
}
