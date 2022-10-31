package shared



type VenueBoxOfficeInfo struct {
    AcceptedPaymentDetails map[string]string `json:"acceptedPaymentDetails,omitempty"`
    OpenHoursDetails map[string]string `json:"openHoursDetails,omitempty"`
    PhoneNumberDetails map[string]string `json:"phoneNumberDetails,omitempty"`
    WillCallDetails map[string]string `json:"willCallDetails,omitempty"`
    
}

