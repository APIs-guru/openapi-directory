package shared

import (
	"time"
)

type V3RouteServiceStatus struct {
	Description *string    `json:"description,omitempty"`
	Timestamp   *time.Time `json:"timestamp,omitempty"`
}
