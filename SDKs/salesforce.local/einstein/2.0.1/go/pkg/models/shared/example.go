package shared

import (
"time")

type Example struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    ID int64 `json:"id"`
    Label *Label `json:"label,omitempty"`
    Location *string `json:"location,omitempty"`
    Name string `json:"name"`
    Object *string `json:"object,omitempty"`
    
}

