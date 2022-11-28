package shared

// Party
// A party that can receive or send invoices
type Party struct {
	Address     Address  `json:"address"`
	CompanyName string   `json:"companyName"`
	Contact     *Contact `json:"contact,omitempty"`
}
