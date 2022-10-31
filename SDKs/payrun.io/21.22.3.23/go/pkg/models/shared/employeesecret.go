package shared

import (
"time")

type EmployeeSecretEmployeeSecret struct {
    Created *time.Time `json:"Created,omitempty"`
    Name *string `json:"Name,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

type EmployeeSecret struct {
    EmployeeSecret *EmployeeSecretEmployeeSecret `json:"EmployeeSecret,omitempty"`
    
}

