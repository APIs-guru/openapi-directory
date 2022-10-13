package shared

import (
	"time"
)

type InsightsV1ConferenceConferenceParticipant struct {
	AccountSid          *string                                        `json:"account_sid"`
	CallDirection       *ConferenceParticipantEnumCallDirectionEnum    `json:"call_direction"`
	CallSid             *string                                        `json:"call_sid"`
	CallStatus          *ConferenceParticipantEnumCallStatusEnum       `json:"call_status"`
	CallType            *ConferenceParticipantEnumCallTypeEnum         `json:"call_type"`
	CoachedParticipants []string                                       `json:"coached_participants"`
	ConferenceRegion    *ConferenceParticipantEnumRegionEnum           `json:"conference_region"`
	ConferenceSid       *string                                        `json:"conference_sid"`
	CountryCode         *string                                        `json:"country_code"`
	DurationSeconds     *int64                                         `json:"duration_seconds"`
	Events              *interface{}                                   `json:"events"`
	From                *string                                        `json:"from"`
	IsCoach             *bool                                          `json:"is_coach"`
	IsModerator         *bool                                          `json:"is_moderator"`
	JitterBufferSize    *ConferenceParticipantEnumJitterBufferSizeEnum `json:"jitter_buffer_size"`
	JoinTime            *time.Time                                     `json:"join_time"`
	Label               *string                                        `json:"label"`
	LeaveTime           *time.Time                                     `json:"leave_time"`
	Metrics             *interface{}                                   `json:"metrics"`
	OutboundQueueLength *int64                                         `json:"outbound_queue_length"`
	OutboundTimeInQueue *int64                                         `json:"outbound_time_in_queue"`
	ParticipantRegion   *ConferenceParticipantEnumRegionEnum           `json:"participant_region"`
	ParticipantSid      *string                                        `json:"participant_sid"`
	ProcessingState     *ConferenceParticipantEnumProcessingStateEnum  `json:"processing_state"`
	Properties          *interface{}                                   `json:"properties"`
	To                  *string                                        `json:"to"`
	URL                 *string                                        `json:"url"`
}
