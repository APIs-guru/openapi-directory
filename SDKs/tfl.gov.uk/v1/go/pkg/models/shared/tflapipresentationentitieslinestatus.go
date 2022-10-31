package shared

import (
	"time"
)

type TflAPIPresentationEntitiesLineStatus struct {
	Created                   *time.Time                                 `json:"created,omitempty"`
	Disruption                *TflAPIPresentationEntitiesDisruption      `json:"disruption,omitempty"`
	ID                        *int32                                     `json:"id,omitempty"`
	LineID                    *string                                    `json:"lineId,omitempty"`
	Modified                  *time.Time                                 `json:"modified,omitempty"`
	Reason                    *string                                    `json:"reason,omitempty"`
	StatusSeverity            *int32                                     `json:"statusSeverity,omitempty"`
	StatusSeverityDescription *string                                    `json:"statusSeverityDescription,omitempty"`
	ValidityPeriods           []TflAPIPresentationEntitiesValidityPeriod `json:"validityPeriods,omitempty"`
}
