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

// ContinuousCheck
// Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in.
type ContinuousCheck struct {
	ContinuousCheckID     *string                                  `json:"ContinuousCheckID,omitempty"`
	ContinuousCheckStatus ContinuousCheckContinuousCheckStatusEnum `json:"ContinuousCheckStatus"`
	CreationDate          *time.Time                               `json:"CreationDate,omitempty"`
	Enabled               *bool                                    `json:"Enabled,omitempty"`
	Frequency             string                                   `json:"Frequency"`
	History               *ContinuousCheckEntry                    `json:"History,omitempty"`
	LastCheckID           string                                   `json:"LastCheckID"`
	NextRunDate           *time.Time                               `json:"NextRunDate,omitempty"`
	OriginalCheck         *Check                                   `json:"OriginalCheck,omitempty"`
	UpdateDate            *time.Time                               `json:"UpdateDate,omitempty"`
}
