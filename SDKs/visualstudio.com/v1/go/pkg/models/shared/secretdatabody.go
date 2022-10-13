package shared

type SecretDataBody struct {
	Name  *string `json:"name"`
	Type  *int32  `json:"type"`
	Value *string `json:"value"`
}
