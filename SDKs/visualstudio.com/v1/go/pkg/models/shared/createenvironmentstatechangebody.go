package shared

import (
	"time"
)

type CreateEnvironmentStateChangeBody struct {
	NewValue *int32     `json:"newValue"`
	OldValue *int32     `json:"oldValue"`
	Time     *time.Time `json:"time"`
}
