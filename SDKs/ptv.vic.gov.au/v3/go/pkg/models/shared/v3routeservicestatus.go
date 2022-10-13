package shared

import (
	"time"
)

type V3RouteServiceStatus struct {
	Description *string    `json:"description"`
	Timestamp   *time.Time `json:"timestamp"`
}
