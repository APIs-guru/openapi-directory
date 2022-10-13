package shared

type Address struct {
	Address1 *string `json:"address_1"`
	Address2 *string `json:"address_2"`
	Address3 *string `json:"address_3"`
	City     *string `json:"city"`
	State    *string `json:"state"`
	Zip      *string `json:"zip"`
}
