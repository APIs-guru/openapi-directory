package shared

type Attribute struct {
	Attribute   *string `json:"attribute,omitempty"`
	Description *string `json:"description,omitempty"`
	Expression  *string `json:"expression,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Type        *string `json:"type,omitempty"`
}
