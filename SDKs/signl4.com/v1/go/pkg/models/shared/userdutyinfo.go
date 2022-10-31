package shared

import (
	"time"
)

type UserDutyInfo struct {
	LastStatusChange *time.Time `json:"lastStatusChange,omitempty"`
	OnDuty           *bool      `json:"onDuty,omitempty"`
	OnManagerDuty    *bool      `json:"onManagerDuty,omitempty"`
	Overdue          *bool      `json:"overdue,omitempty"`
}
