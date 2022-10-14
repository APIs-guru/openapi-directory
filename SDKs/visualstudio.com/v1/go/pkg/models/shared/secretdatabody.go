package shared

type SecretDataBody struct {
	Name  *string `json:"name,omitempty"`
	Type  *int32  `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
