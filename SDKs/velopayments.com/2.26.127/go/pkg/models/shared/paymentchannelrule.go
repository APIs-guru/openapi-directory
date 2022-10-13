package shared

type PaymentChannelRule struct {
	DisplayName  string `json:"displayName"`
	DisplayOrder *int64 `json:"displayOrder"`
	Element      string `json:"element"`
	MaxLength    *int64 `json:"maxLength"`
	MinLength    *int64 `json:"minLength"`
	Required     bool   `json:"required"`
	Validation   string `json:"validation"`
}
