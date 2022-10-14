package shared

type Party struct {
	Address     Address  `json:"address"`
	CompanyName string   `json:"companyName"`
	Contact     *Contact `json:"contact,omitempty"`
}
