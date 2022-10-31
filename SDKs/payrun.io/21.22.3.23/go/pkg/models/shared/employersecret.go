package shared

import (
"time")

type EmployerSecretEmployerSecret struct {
    Created *time.Time `json:"Created,omitempty"`
    Name *string `json:"Name,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

type EmployerSecret struct {
    EmployerSecret *EmployerSecretEmployerSecret `json:"EmployerSecret,omitempty"`
    
}

