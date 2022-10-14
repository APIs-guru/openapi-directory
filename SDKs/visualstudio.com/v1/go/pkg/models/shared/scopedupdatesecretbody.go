package shared

type ScopedUpdateSecretBody struct {
	Filters    []SecretFilterBody `json:"filters,omitempty"`
	Notes      *string            `json:"notes,omitempty"`
	Scope      *int32             `json:"scope,omitempty"`
	SecretName *string            `json:"secretName,omitempty"`
	Value      *string            `json:"value,omitempty"`
}
