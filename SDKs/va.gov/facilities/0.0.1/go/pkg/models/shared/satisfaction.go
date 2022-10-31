package shared

import (
"time")

type Satisfaction struct {
    EffectiveDate *time.Time `json:"effective_date,omitempty"`
    Health *PatientSatisfaction `json:"health,omitempty"`
    
}

