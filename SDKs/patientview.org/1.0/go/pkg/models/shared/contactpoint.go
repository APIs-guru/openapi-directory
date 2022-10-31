package shared

import (
"time")

type ContactPoint struct {
    ContactPointType *ContactPointType `json:"contactPointType,omitempty"`
    Content *string `json:"content,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdate *time.Time `json:"lastUpdate,omitempty"`
    
}

