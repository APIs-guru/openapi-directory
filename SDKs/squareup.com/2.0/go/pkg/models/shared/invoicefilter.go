package shared

type InvoiceFilter struct {
	CustomerIds []string `json:"customer_ids,omitempty"`
	LocationIds []string `json:"location_ids"`
}
