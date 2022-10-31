package shared

import (
"time")

type AlertCounts struct {
    Acked *int64 `json:"acked,omitempty"`
    Closed *int64 `json:"closed,omitempty"`
    End *time.Time `json:"end,omitempty"`
    LastModified *time.Time `json:"lastModified,omitempty"`
    Start *time.Time `json:"start,omitempty"`
    Unhandled *int64 `json:"unhandled,omitempty"`
    
}

