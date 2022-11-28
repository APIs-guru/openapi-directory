package shared

import (
	"time"
)

type InsightsV1ConferenceConferenceParticipant struct {
	AccountSid          *string                                        `json:"account_sid,omitempty"`
	CallDirection       *ConferenceParticipantEnumCallDirectionEnum    `json:"call_direction,omitempty"`
	CallSid             *string                                        `json:"call_sid,omitempty"`
	CallStatus          *ConferenceParticipantEnumCallStatusEnum       `json:"call_status,omitempty"`
	CallType            *ConferenceParticipantEnumCallTypeEnum         `json:"call_type,omitempty"`
	CoachedParticipants []string                                       `json:"coached_participants,omitempty"`
	ConferenceRegion    *ConferenceParticipantEnumRegionEnum           `json:"conference_region,omitempty"`
	ConferenceSid       *string                                        `json:"conference_sid,omitempty"`
	CountryCode         *string                                        `json:"country_code,omitempty"`
	DurationSeconds     *int64                                         `json:"duration_seconds,omitempty"`
	Events              *interface{}                                   `json:"events,omitempty"`
	From                *string                                        `json:"from,omitempty"`
	IsCoach             *bool                                          `json:"is_coach,omitempty"`
	IsModerator         *bool                                          `json:"is_moderator,omitempty"`
	JitterBufferSize    *ConferenceParticipantEnumJitterBufferSizeEnum `json:"jitter_buffer_size,omitempty"`
	JoinTime            *time.Time                                     `json:"join_time,omitempty"`
	Label               *string                                        `json:"label,omitempty"`
	LeaveTime           *time.Time                                     `json:"leave_time,omitempty"`
	Metrics             *interface{}                                   `json:"metrics,omitempty"`
	OutboundQueueLength *int64                                         `json:"outbound_queue_length,omitempty"`
	OutboundTimeInQueue *int64                                         `json:"outbound_time_in_queue,omitempty"`
	ParticipantRegion   *ConferenceParticipantEnumRegionEnum           `json:"participant_region,omitempty"`
	ParticipantSid      *string                                        `json:"participant_sid,omitempty"`
	ProcessingState     *ConferenceParticipantEnumProcessingStateEnum  `json:"processing_state,omitempty"`
	Properties          *interface{}                                   `json:"properties,omitempty"`
	To                  *string                                        `json:"to,omitempty"`
	URL                 *string                                        `json:"url,omitempty"`
}
