package shared

import (
"time")


type ContinuousCheckContinuousCheckStatusEnum string

const (
    ContinuousCheckContinuousCheckStatusEnumNew ContinuousCheckContinuousCheckStatusEnum = "new"
ContinuousCheckContinuousCheckStatusEnumUp ContinuousCheckContinuousCheckStatusEnum = "up"
ContinuousCheckContinuousCheckStatusEnumDown ContinuousCheckContinuousCheckStatusEnum = "down"
ContinuousCheckContinuousCheckStatusEnumSame ContinuousCheckContinuousCheckStatusEnum = "same"
)


type ContinuousCheck struct {
    ContinuousCheckID *string `json:"ContinuousCheckID,omitempty"`
    ContinuousCheckStatus ContinuousCheckContinuousCheckStatusEnum `json:"ContinuousCheckStatus"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    Enabled *bool `json:"Enabled,omitempty"`
    Frequency string `json:"Frequency"`
    History *ContinuousCheckEntry `json:"History,omitempty"`
    LastCheckID string `json:"LastCheckID"`
    NextRunDate *time.Time `json:"NextRunDate,omitempty"`
    OriginalCheck *Check `json:"OriginalCheck,omitempty"`
    UpdateDate *time.Time `json:"UpdateDate,omitempty"`
    
}

