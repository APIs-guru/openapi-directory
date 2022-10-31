package shared

import (
"time")

type Feature struct {
    Created *time.Time `json:"created,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdate *time.Time `json:"lastUpdate,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

