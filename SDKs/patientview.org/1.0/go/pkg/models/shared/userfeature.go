package shared

import (
	"time"
)

type UserFeature struct {
	Created      *time.Time
	Feature      *Feature
	ID           *int64
	LastUpdate   *time.Time
	OptInDate    *time.Time
	OptInHidden  *bool
	OptInStatus  *bool
	OptOutHidden *bool
}
