package shared

type AddressWithTimeZone struct {
	Address1   *string `json:"address_1,omitempty"`
	Address2   *string `json:"address_2,omitempty"`
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State      *string `json:"state,omitempty"`
	TimeZone   *string `json:"time_zone,omitempty"`
}
