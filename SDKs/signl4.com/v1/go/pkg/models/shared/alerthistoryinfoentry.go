package shared

import (
"time")

type AlertHistoryInfoEntry struct {
    ID *string `json:"id,omitempty"`
    Timestamp *time.Time `json:"timestamp,omitempty"`
    Type *int32 `json:"type,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

