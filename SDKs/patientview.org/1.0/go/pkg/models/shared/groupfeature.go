package shared

import (
	"time"
)

type GroupFeature struct {
	Created    *time.Time `json:"created"`
	Feature    *Feature   `json:"feature"`
	ID         *int64     `json:"id"`
	LastUpdate *time.Time `json:"lastUpdate"`
}
