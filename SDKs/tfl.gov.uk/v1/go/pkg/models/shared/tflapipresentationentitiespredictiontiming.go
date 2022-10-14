package shared

import (
	"time"
)

type TflAPIPresentationEntitiesPredictionTiming struct {
	CountdownServerAdjustment *string    `json:"countdownServerAdjustment,omitempty"`
	Insert                    *time.Time `json:"insert,omitempty"`
	Read                      *time.Time `json:"read,omitempty"`
	Received                  *time.Time `json:"received,omitempty"`
	Sent                      *time.Time `json:"sent,omitempty"`
	Source                    *time.Time `json:"source,omitempty"`
}
