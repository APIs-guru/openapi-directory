package shared

import (
	"time"
)

type Presale struct {
	Descriptions  map[string]string `json:"descriptions,omitempty"`
	EndDateTime   *time.Time        `json:"endDateTime,omitempty"`
	Names         map[string]string `json:"names,omitempty"`
	StartDateTime *time.Time        `json:"startDateTime,omitempty"`
	URL           *string           `json:"url,omitempty"`
}
