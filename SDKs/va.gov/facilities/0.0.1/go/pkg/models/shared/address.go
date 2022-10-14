package shared

type Address struct {
	Address1 *string `json:"address_1,omitempty"`
	Address2 *string `json:"address_2,omitempty"`
	Address3 *string `json:"address_3,omitempty"`
	City     *string `json:"city,omitempty"`
	State    *string `json:"state,omitempty"`
	Zip      *string `json:"zip,omitempty"`
}
