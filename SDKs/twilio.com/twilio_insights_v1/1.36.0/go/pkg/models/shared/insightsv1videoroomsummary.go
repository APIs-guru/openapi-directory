package shared

import (
	"time"
)

type InsightsV1VideoRoomSummaryStatusCallbackMethodEnum string

const (
	InsightsV1VideoRoomSummaryStatusCallbackMethodEnumHead   InsightsV1VideoRoomSummaryStatusCallbackMethodEnum = "HEAD"
	InsightsV1VideoRoomSummaryStatusCallbackMethodEnumGet    InsightsV1VideoRoomSummaryStatusCallbackMethodEnum = "GET"
	InsightsV1VideoRoomSummaryStatusCallbackMethodEnumPost   InsightsV1VideoRoomSummaryStatusCallbackMethodEnum = "POST"
	InsightsV1VideoRoomSummaryStatusCallbackMethodEnumPatch  InsightsV1VideoRoomSummaryStatusCallbackMethodEnum = "PATCH"
	InsightsV1VideoRoomSummaryStatusCallbackMethodEnumPut    InsightsV1VideoRoomSummaryStatusCallbackMethodEnum = "PUT"
	InsightsV1VideoRoomSummaryStatusCallbackMethodEnumDelete InsightsV1VideoRoomSummaryStatusCallbackMethodEnum = "DELETE"
)

type InsightsV1VideoRoomSummary struct {
	AccountSid                  *string                                             `json:"account_sid,omitempty"`
	Codecs                      []VideoRoomSummaryEnumCodecEnum                     `json:"codecs,omitempty"`
	ConcurrentParticipants      *int64                                              `json:"concurrent_participants,omitempty"`
	CreateTime                  *time.Time                                          `json:"create_time,omitempty"`
	CreatedMethod               *VideoRoomSummaryEnumCreatedMethodEnum              `json:"created_method,omitempty"`
	DurationSec                 *int64                                              `json:"duration_sec,omitempty"`
	EdgeLocation                *VideoRoomSummaryEnumEdgeLocationEnum               `json:"edge_location,omitempty"`
	EndReason                   *VideoRoomSummaryEnumEndReasonEnum                  `json:"end_reason,omitempty"`
	EndTime                     *time.Time                                          `json:"end_time,omitempty"`
	Links                       map[string]interface{}                              `json:"links,omitempty"`
	MaxConcurrentParticipants   *int64                                              `json:"max_concurrent_participants,omitempty"`
	MaxParticipants             *int64                                              `json:"max_participants,omitempty"`
	MediaRegion                 *VideoRoomSummaryEnumTwilioRealmEnum                `json:"media_region,omitempty"`
	ProcessingState             *VideoRoomSummaryEnumProcessingStateEnum            `json:"processing_state,omitempty"`
	RecordingEnabled            *bool                                               `json:"recording_enabled,omitempty"`
	RoomName                    *string                                             `json:"room_name,omitempty"`
	RoomSid                     *string                                             `json:"room_sid,omitempty"`
	RoomStatus                  *VideoRoomSummaryEnumRoomStatusEnum                 `json:"room_status,omitempty"`
	RoomType                    *VideoRoomSummaryEnumRoomTypeEnum                   `json:"room_type,omitempty"`
	StatusCallback              *string                                             `json:"status_callback,omitempty"`
	StatusCallbackMethod        *InsightsV1VideoRoomSummaryStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
	TotalParticipantDurationSec *int64                                              `json:"total_participant_duration_sec,omitempty"`
	TotalRecordingDurationSec   *int64                                              `json:"total_recording_duration_sec,omitempty"`
	UniqueParticipantIdentities *int64                                              `json:"unique_participant_identities,omitempty"`
	UniqueParticipants          *int64                                              `json:"unique_participants,omitempty"`
	URL                         *string                                             `json:"url,omitempty"`
}
