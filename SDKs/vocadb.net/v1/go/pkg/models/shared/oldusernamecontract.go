package shared

import (
"time")

type OldUsernameContract struct {
    Date *time.Time `json:"date,omitempty"`
    OldName *string `json:"oldName,omitempty"`
    
}

