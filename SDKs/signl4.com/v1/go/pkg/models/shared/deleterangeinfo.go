package shared

import (
"time")

type DeleteRangeInfo struct {
    From *time.Time `json:"from,omitempty"`
    To *time.Time `json:"to,omitempty"`
    
}

