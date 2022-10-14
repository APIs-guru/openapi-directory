package shared

type InvoiceQuery struct {
	Filter InvoiceFilter `json:"filter"`
	Sort   *InvoiceSort  `json:"sort,omitempty"`
}
