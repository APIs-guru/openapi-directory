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
	AccountSid                  *string                                             `json:"account_sid"`
	Codecs                      []VideoRoomSummaryEnumCodecEnum                     `json:"codecs"`
	ConcurrentParticipants      *int64                                              `json:"concurrent_participants"`
	CreateTime                  *time.Time                                          `json:"create_time"`
	CreatedMethod               *VideoRoomSummaryEnumCreatedMethodEnum              `json:"created_method"`
	DurationSec                 *int64                                              `json:"duration_sec"`
	EdgeLocation                *VideoRoomSummaryEnumEdgeLocationEnum               `json:"edge_location"`
	EndReason                   *VideoRoomSummaryEnumEndReasonEnum                  `json:"end_reason"`
	EndTime                     *time.Time                                          `json:"end_time"`
	Links                       map[string]interface{}                              `json:"links"`
	MaxConcurrentParticipants   *int64                                              `json:"max_concurrent_participants"`
	MaxParticipants             *int64                                              `json:"max_participants"`
	MediaRegion                 *VideoRoomSummaryEnumTwilioRealmEnum                `json:"media_region"`
	ProcessingState             *VideoRoomSummaryEnumProcessingStateEnum            `json:"processing_state"`
	RecordingEnabled            *bool                                               `json:"recording_enabled"`
	RoomName                    *string                                             `json:"room_name"`
	RoomSid                     *string                                             `json:"room_sid"`
	RoomStatus                  *VideoRoomSummaryEnumRoomStatusEnum                 `json:"room_status"`
	RoomType                    *VideoRoomSummaryEnumRoomTypeEnum                   `json:"room_type"`
	StatusCallback              *string                                             `json:"status_callback"`
	StatusCallbackMethod        *InsightsV1VideoRoomSummaryStatusCallbackMethodEnum `json:"status_callback_method"`
	TotalParticipantDurationSec *int64                                              `json:"total_participant_duration_sec"`
	TotalRecordingDurationSec   *int64                                              `json:"total_recording_duration_sec"`
	UniqueParticipantIdentities *int64                                              `json:"unique_participant_identities"`
	UniqueParticipants          *int64                                              `json:"unique_participants"`
	URL                         *string                                             `json:"url"`
}
