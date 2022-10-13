package shared

type InvoiceFilter struct {
	CustomerIds []string `json:"customer_ids"`
	LocationIds []string `json:"location_ids"`
}
