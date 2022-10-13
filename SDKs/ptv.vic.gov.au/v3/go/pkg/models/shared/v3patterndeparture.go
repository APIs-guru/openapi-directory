package shared

import (
	"time"
)

type V3PatternDeparture struct {
	AtPlatform            *bool         `json:"at_platform"`
	DepartureSequence     *int32        `json:"departure_sequence"`
	DirectionID           *int32        `json:"direction_id"`
	DisruptionIds         []int64       `json:"disruption_ids"`
	EstimatedDepartureUtc *time.Time    `json:"estimated_departure_utc"`
	Flags                 *string       `json:"flags"`
	PlatformNumber        *string       `json:"platform_number"`
	RouteID               *int32        `json:"route_id"`
	RunID                 *int32        `json:"run_id"`
	RunRef                *string       `json:"run_ref"`
	ScheduledDepartureUtc *time.Time    `json:"scheduled_departure_utc"`
	SkippedStops          []V3StopModel `json:"skipped_stops"`
	StopID                *int32        `json:"stop_id"`
}
