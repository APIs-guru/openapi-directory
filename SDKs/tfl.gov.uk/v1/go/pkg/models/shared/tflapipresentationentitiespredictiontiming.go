package shared

import (
	"time"
)

type TflAPIPresentationEntitiesPredictionTiming struct {
	CountdownServerAdjustment *string    `json:"countdownServerAdjustment"`
	Insert                    *time.Time `json:"insert"`
	Read                      *time.Time `json:"read"`
	Received                  *time.Time `json:"received"`
	Sent                      *time.Time `json:"sent"`
	Source                    *time.Time `json:"source"`
}
