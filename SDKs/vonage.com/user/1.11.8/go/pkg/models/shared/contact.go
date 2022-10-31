package shared

type Contact struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
