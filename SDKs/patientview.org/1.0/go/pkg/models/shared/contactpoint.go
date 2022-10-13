package shared

import (
	"time"
)

type ContactPoint struct {
	ContactPointType *ContactPointType `json:"contactPointType"`
	Content          *string           `json:"content"`
	Created          *time.Time        `json:"created"`
	ID               *int64            `json:"id"`
	LastUpdate       *time.Time        `json:"lastUpdate"`
}
