package shared

import (
	"time"
)

type V3PatternDeparture struct {
	AtPlatform            *bool         `json:"at_platform,omitempty"`
	DepartureSequence     *int32        `json:"departure_sequence,omitempty"`
	DirectionID           *int32        `json:"direction_id,omitempty"`
	DisruptionIds         []int64       `json:"disruption_ids,omitempty"`
	EstimatedDepartureUtc *time.Time    `json:"estimated_departure_utc,omitempty"`
	Flags                 *string       `json:"flags,omitempty"`
	PlatformNumber        *string       `json:"platform_number,omitempty"`
	RouteID               *int32        `json:"route_id,omitempty"`
	RunID                 *int32        `json:"run_id,omitempty"`
	RunRef                *string       `json:"run_ref,omitempty"`
	ScheduledDepartureUtc *time.Time    `json:"scheduled_departure_utc,omitempty"`
	SkippedStops          []V3StopModel `json:"skipped_stops,omitempty"`
	StopID                *int32        `json:"stop_id,omitempty"`
}
