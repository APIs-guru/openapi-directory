package shared

import (
	"time"
)

type InsightsV1Conference struct {
	AccountSid                *string                                `json:"account_sid"`
	ConferenceSid             *string                                `json:"conference_sid"`
	ConnectDurationSeconds    *int64                                 `json:"connect_duration_seconds"`
	CreateTime                *time.Time                             `json:"create_time"`
	DetectedIssues            *interface{}                           `json:"detected_issues"`
	DurationSeconds           *int64                                 `json:"duration_seconds"`
	EndReason                 *ConferenceEnumConferenceEndReasonEnum `json:"end_reason"`
	EndTime                   *time.Time                             `json:"end_time"`
	EndedBy                   *string                                `json:"ended_by"`
	FriendlyName              *string                                `json:"friendly_name"`
	Links                     map[string]interface{}                 `json:"links"`
	MaxConcurrentParticipants *int64                                 `json:"max_concurrent_participants"`
	MaxParticipants           *int64                                 `json:"max_participants"`
	MixerRegion               *ConferenceEnumRegionEnum              `json:"mixer_region"`
	MixerRegionRequested      *ConferenceEnumRegionEnum              `json:"mixer_region_requested"`
	ProcessingState           *ConferenceEnumProcessingStateEnum     `json:"processing_state"`
	RecordingEnabled          *bool                                  `json:"recording_enabled"`
	StartTime                 *time.Time                             `json:"start_time"`
	Status                    *ConferenceEnumConferenceStatusEnum    `json:"status"`
	TagInfo                   *interface{}                           `json:"tag_info"`
	Tags                      []ConferenceEnumTagEnum                `json:"tags"`
	UniqueParticipants        *int64                                 `json:"unique_participants"`
	URL                       *string                                `json:"url"`
}
