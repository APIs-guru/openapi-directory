package shared

import (
"time")

type ContactAddressInfo struct {
    Address *string `json:"address,omitempty"`
    Channel *int32 `json:"channel,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    Device *Device `json:"device,omitempty"`
    ID *string `json:"id,omitempty"`
    LastUpdated *time.Time `json:"lastUpdated,omitempty"`
    Options *int32 `json:"options,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

