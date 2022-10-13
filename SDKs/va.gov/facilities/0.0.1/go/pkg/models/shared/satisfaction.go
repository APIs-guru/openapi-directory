package shared

import (
	"time"
)

type Satisfaction struct {
	EffectiveDate *time.Time           `json:"effective_date"`
	Health        *PatientSatisfaction `json:"health"`
}
