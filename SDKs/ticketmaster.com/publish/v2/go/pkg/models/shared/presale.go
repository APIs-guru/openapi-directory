package shared

import (
	"time"
)

type Presale struct {
	Descriptions  map[string]string `json:"descriptions"`
	EndDateTime   *time.Time        `json:"endDateTime"`
	Names         map[string]string `json:"names"`
	StartDateTime *time.Time        `json:"startDateTime"`
	URL           *string           `json:"url"`
}
