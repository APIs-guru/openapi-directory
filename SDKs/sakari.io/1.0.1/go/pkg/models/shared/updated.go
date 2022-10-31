package shared

import (
"time")

type UpdatedBy struct {
    FirstName *string `json:"firstName,omitempty"`
    ID *string `json:"id,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    
}

type Updated struct {
    At *time.Time `json:"at,omitempty"`
    By *UpdatedBy `json:"by,omitempty"`
    
}

