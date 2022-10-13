package shared

import (
	"time"
)

type UserDutyInfo struct {
	LastStatusChange *time.Time `json:"lastStatusChange"`
	OnDuty           *bool      `json:"onDuty"`
	OnManagerDuty    *bool      `json:"onManagerDuty"`
	Overdue          *bool      `json:"overdue"`
}
