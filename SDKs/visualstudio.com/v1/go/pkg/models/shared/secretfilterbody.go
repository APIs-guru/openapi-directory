package shared

type SecretFilterBody struct {
	Type  *int32  `json:"type"`
	Value *string `json:"value"`
}
