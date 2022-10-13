package shared

import (
	"time"
)

type WaitTimes struct {
	EffectiveDate *time.Time        `json:"effective_date"`
	Health        []PatientWaitTime `json:"health"`
}
