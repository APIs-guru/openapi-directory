package shared

type AddressWithTimeZone struct {
	Address1   *string `json:"address_1"`
	Address2   *string `json:"address_2"`
	City       *string `json:"city"`
	Country    *string `json:"country"`
	PostalCode *string `json:"postal_code"`
	State      *string `json:"state"`
	TimeZone   *string `json:"time_zone"`
}
