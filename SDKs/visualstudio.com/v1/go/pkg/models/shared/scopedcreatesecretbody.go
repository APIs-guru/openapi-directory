package shared

type ScopedCreateSecretBody struct {
	Filters    []SecretFilterBody `json:"filters"`
	Notes      *string            `json:"notes"`
	Scope      *int32             `json:"scope"`
	SecretName *string            `json:"secretName"`
	Type       *int32             `json:"type"`
	Value      *string            `json:"value"`
}
