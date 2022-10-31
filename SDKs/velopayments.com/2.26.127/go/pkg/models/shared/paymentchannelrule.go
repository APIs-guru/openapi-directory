package shared

type PaymentChannelRule struct {
	DisplayName  string `json:"displayName"`
	DisplayOrder *int64 `json:"displayOrder,omitempty"`
	Element      string `json:"element"`
	MaxLength    *int64 `json:"maxLength,omitempty"`
	MinLength    *int64 `json:"minLength,omitempty"`
	Required     bool   `json:"required"`
	Validation   string `json:"validation"`
}
