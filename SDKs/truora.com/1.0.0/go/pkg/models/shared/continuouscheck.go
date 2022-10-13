package shared

import (
	"time"
)

type ContinuousCheckContinuousCheckStatusEnum string

const (
	ContinuousCheckContinuousCheckStatusEnumNew  ContinuousCheckContinuousCheckStatusEnum = "new"
	ContinuousCheckContinuousCheckStatusEnumUp   ContinuousCheckContinuousCheckStatusEnum = "up"
	ContinuousCheckContinuousCheckStatusEnumDown ContinuousCheckContinuousCheckStatusEnum = "down"
	ContinuousCheckContinuousCheckStatusEnumSame ContinuousCheckContinuousCheckStatusEnum = "same"
)

type ContinuousCheck struct {
	ContinuousCheckID     *string                                  `json:"ContinuousCheckID"`
	ContinuousCheckStatus ContinuousCheckContinuousCheckStatusEnum `json:"ContinuousCheckStatus"`
	CreationDate          *time.Time                               `json:"CreationDate"`
	Enabled               *bool                                    `json:"Enabled"`
	Frequency             string                                   `json:"Frequency"`
	History               *ContinuousCheckEntry                    `json:"History"`
	LastCheckID           string                                   `json:"LastCheckID"`
	NextRunDate           *time.Time                               `json:"NextRunDate"`
	OriginalCheck         *Check                                   `json:"OriginalCheck"`
	UpdateDate            *time.Time                               `json:"UpdateDate"`
}
