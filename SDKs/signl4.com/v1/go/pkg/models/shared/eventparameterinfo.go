package shared

type EventParameterInfo struct {
	Name  *string `json:"name"`
	Order *int32  `json:"order"`
	Type  *int32  `json:"type"`
	Value *string `json:"value"`
}
