package shared

import (
	"time"
)

type TflAPIPresentationEntitiesLineStatus struct {
	Created                   *time.Time                                 `json:"created"`
	Disruption                *TflAPIPresentationEntitiesDisruption      `json:"disruption"`
	ID                        *int32                                     `json:"id"`
	LineID                    *string                                    `json:"lineId"`
	Modified                  *time.Time                                 `json:"modified"`
	Reason                    *string                                    `json:"reason"`
	StatusSeverity            *int32                                     `json:"statusSeverity"`
	StatusSeverityDescription *string                                    `json:"statusSeverityDescription"`
	ValidityPeriods           []TflAPIPresentationEntitiesValidityPeriod `json:"validityPeriods"`
}
