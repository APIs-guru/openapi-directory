package shared

import (
"time")

type CreateEnvironmentStateChangeBody struct {
    NewValue *int32 `json:"newValue,omitempty"`
    OldValue *int32 `json:"oldValue,omitempty"`
    Time *time.Time `json:"time,omitempty"`
    
}

