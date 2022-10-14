package shared

import (
	"time"
)

type TflAPIPresentationEntitiesRoadCorridor struct {
	Bounds                     *string    `json:"bounds,omitempty"`
	DisplayName                *string    `json:"displayName,omitempty"`
	Envelope                   *string    `json:"envelope,omitempty"`
	Group                      *string    `json:"group,omitempty"`
	ID                         *string    `json:"id,omitempty"`
	StatusAggregationEndDate   *time.Time `json:"statusAggregationEndDate,omitempty"`
	StatusAggregationStartDate *time.Time `json:"statusAggregationStartDate,omitempty"`
	StatusSeverity             *string    `json:"statusSeverity,omitempty"`
	StatusSeverityDescription  *string    `json:"statusSeverityDescription,omitempty"`
	URL                        *string    `json:"url,omitempty"`
}
