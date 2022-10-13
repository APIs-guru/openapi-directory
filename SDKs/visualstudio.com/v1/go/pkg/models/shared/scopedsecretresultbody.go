package shared

import (
	"time"
)

type ScopedSecretResultBody struct {
	Filters      []SecretFilterBody `json:"filters"`
	ID           *string            `json:"id"`
	LastModified *time.Time         `json:"lastModified"`
	Notes        *string            `json:"notes"`
	Scope        *int32             `json:"scope"`
	SecretName   *string            `json:"secretName"`
	Type         *int32             `json:"type"`
}
