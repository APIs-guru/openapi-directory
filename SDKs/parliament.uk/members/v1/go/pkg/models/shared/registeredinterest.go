package shared

import (
"time")

type RegisteredInterest struct {
    CreatedWhen *time.Time `json:"createdWhen,omitempty"`
    DeletedWhen *time.Time `json:"deletedWhen,omitempty"`
    Interest *string `json:"interest,omitempty"`
    LastAmendedWhen *time.Time `json:"lastAmendedWhen,omitempty"`
    
}

