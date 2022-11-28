package shared

// APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities
// Whether a phone number can receive calls or messages
type APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities struct {
	Fax   *bool `json:"fax,omitempty"`
	Mms   *bool `json:"mms,omitempty"`
	Sms   *bool `json:"sms,omitempty"`
	Voice *bool `json:"voice,omitempty"`
}

type APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational struct {
	AddressRequirements *string                                                                             `json:"address_requirements,omitempty"`
	Beta                *bool                                                                               `json:"beta,omitempty"`
	Capabilities        *APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalCapabilities `json:"capabilities,omitempty"`
	FriendlyName        *string                                                                             `json:"friendly_name,omitempty"`
	IsoCountry          *string                                                                             `json:"iso_country,omitempty"`
	Lata                *string                                                                             `json:"lata,omitempty"`
	Latitude            *float64                                                                            `json:"latitude,omitempty"`
	Locality            *string                                                                             `json:"locality,omitempty"`
	Longitude           *float64                                                                            `json:"longitude,omitempty"`
	PhoneNumber         *string                                                                             `json:"phone_number,omitempty"`
	PostalCode          *string                                                                             `json:"postal_code,omitempty"`
	RateCenter          *string                                                                             `json:"rate_center,omitempty"`
	Region              *string                                                                             `json:"region,omitempty"`
}
