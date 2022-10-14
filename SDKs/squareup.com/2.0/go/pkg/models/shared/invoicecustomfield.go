package shared

type InvoiceCustomField struct {
	Label     *string `json:"label,omitempty"`
	Placement *string `json:"placement,omitempty"`
	Value     *string `json:"value,omitempty"`
}
