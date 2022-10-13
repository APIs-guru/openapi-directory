package shared

type ScopedUpdateSecretBody struct {
	Filters    []SecretFilterBody `json:"filters"`
	Notes      *string            `json:"notes"`
	Scope      *int32             `json:"scope"`
	SecretName *string            `json:"secretName"`
	Value      *string            `json:"value"`
}
