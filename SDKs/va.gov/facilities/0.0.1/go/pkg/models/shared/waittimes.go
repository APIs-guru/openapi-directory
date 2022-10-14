package shared

import (
	"time"
)

type WaitTimes struct {
	EffectiveDate *time.Time        `json:"effective_date,omitempty"`
	Health        []PatientWaitTime `json:"health,omitempty"`
}
