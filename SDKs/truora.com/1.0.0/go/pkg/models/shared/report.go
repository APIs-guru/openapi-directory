package shared

import (
"time")

type Report struct {
    CreatedBy *string `json:"created_by,omitempty"`
    CreatedChecksCount *int64 `json:"created_checks_count,omitempty"`
    CreationDate time.Time `json:"creation_date"`
    HasData *bool `json:"has_data,omitempty"`
    ID string `json:"id"`
    InvalidChecksCount *int64 `json:"invalid_checks_count,omitempty"`
    Name string `json:"name"`
    Size *int64 `json:"size,omitempty"`
    UpdateDate time.Time `json:"update_date"`
    
}

