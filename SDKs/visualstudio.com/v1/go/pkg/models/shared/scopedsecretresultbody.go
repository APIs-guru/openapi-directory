package shared

import (
"time")

type ScopedSecretResultBody struct {
    Filters []SecretFilterBody `json:"filters,omitempty"`
    ID *string `json:"id,omitempty"`
    LastModified *time.Time `json:"lastModified,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Scope *int32 `json:"scope,omitempty"`
    SecretName *string `json:"secretName,omitempty"`
    Type *int32 `json:"type,omitempty"`
    
}

