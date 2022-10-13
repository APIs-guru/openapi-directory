package shared

type Attribute struct {
	Attribute   *string `json:"attribute"`
	Description *string `json:"description"`
	Expression  *string `json:"expression"`
	ID          *int64  `json:"id"`
	Type        *string `json:"type"`
}
