package shared

type CustomerSort struct {
	Field *string `json:"field,omitempty"`
	Order *string `json:"order,omitempty"`
}
