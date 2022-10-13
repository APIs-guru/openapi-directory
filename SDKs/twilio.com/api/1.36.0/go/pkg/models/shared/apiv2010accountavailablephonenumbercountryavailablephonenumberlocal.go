package shared

type APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalCapabilities struct {
	Fax   *bool `json:"fax"`
	Mms   *bool `json:"mms"`
	Sms   *bool `json:"sms"`
	Voice *bool `json:"voice"`
}

type APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal struct {
	AddressRequirements *string                                                                          `json:"address_requirements"`
	Beta                *bool                                                                            `json:"beta"`
	Capabilities        *APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalCapabilities `json:"capabilities"`
	FriendlyName        *string                                                                          `json:"friendly_name"`
	IsoCountry          *string                                                                          `json:"iso_country"`
	Lata                *string                                                                          `json:"lata"`
	Latitude            *string                                                                          `json:"latitude"`
	Locality            *string                                                                          `json:"locality"`
	Longitude           *string                                                                          `json:"longitude"`
	PhoneNumber         *string                                                                          `json:"phone_number"`
	PostalCode          *string                                                                          `json:"postal_code"`
	RateCenter          *string                                                                          `json:"rate_center"`
	Region              *string                                                                          `json:"region"`
}
