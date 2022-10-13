package shared

import (
	"time"
)

type TflAPIPresentationEntitiesRoadCorridor struct {
	Bounds                     *string    `json:"bounds"`
	DisplayName                *string    `json:"displayName"`
	Envelope                   *string    `json:"envelope"`
	Group                      *string    `json:"group"`
	ID                         *string    `json:"id"`
	StatusAggregationEndDate   *time.Time `json:"statusAggregationEndDate"`
	StatusAggregationStartDate *time.Time `json:"statusAggregationStartDate"`
	StatusSeverity             *string    `json:"statusSeverity"`
	StatusSeverityDescription  *string    `json:"statusSeverityDescription"`
	URL                        *string    `json:"url"`
}
