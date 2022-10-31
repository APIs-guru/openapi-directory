package shared

type ScopedCreateSecretBody struct {
	Filters    []SecretFilterBody `json:"filters,omitempty"`
	Notes      *string            `json:"notes,omitempty"`
	Scope      *int32             `json:"scope,omitempty"`
	SecretName *string            `json:"secretName,omitempty"`
	Type       *int32             `json:"type,omitempty"`
	Value      *string            `json:"value,omitempty"`
}
