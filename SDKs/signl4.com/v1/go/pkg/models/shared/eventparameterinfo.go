package shared

type EventParameterInfo struct {
	Name  *string `json:"name,omitempty"`
	Order *int32  `json:"order,omitempty"`
	Type  *int32  `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
