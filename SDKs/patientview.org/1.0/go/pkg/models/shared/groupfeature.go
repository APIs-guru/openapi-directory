package shared

import (
	"time"
)

type GroupFeature struct {
	Created    *time.Time `json:"created,omitempty"`
	Feature    *Feature   `json:"feature,omitempty"`
	ID         *int64     `json:"id,omitempty"`
	LastUpdate *time.Time `json:"lastUpdate,omitempty"`
}
