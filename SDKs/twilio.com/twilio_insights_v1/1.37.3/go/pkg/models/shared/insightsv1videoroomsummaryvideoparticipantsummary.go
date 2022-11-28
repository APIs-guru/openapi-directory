package shared

import (
	"time"
)

type InsightsV1VideoRoomSummaryVideoParticipantSummary struct {
	AccountSid          *string                                      `json:"account_sid,omitempty"`
	Codecs              []VideoParticipantSummaryEnumCodecEnum       `json:"codecs,omitempty"`
	DurationSec         *int64                                       `json:"duration_sec,omitempty"`
	EdgeLocation        *VideoParticipantSummaryEnumEdgeLocationEnum `json:"edge_location,omitempty"`
	EndReason           *string                                      `json:"end_reason,omitempty"`
	ErrorCode           *int64                                       `json:"error_code,omitempty"`
	ErrorCodeURL        *string                                      `json:"error_code_url,omitempty"`
	JoinTime            *time.Time                                   `json:"join_time,omitempty"`
	LeaveTime           *time.Time                                   `json:"leave_time,omitempty"`
	MediaRegion         *VideoParticipantSummaryEnumTwilioRealmEnum  `json:"media_region,omitempty"`
	ParticipantIdentity *string                                      `json:"participant_identity,omitempty"`
	ParticipantSid      *string                                      `json:"participant_sid,omitempty"`
	Properties          *interface{}                                 `json:"properties,omitempty"`
	PublisherInfo       *interface{}                                 `json:"publisher_info,omitempty"`
	RoomSid             *string                                      `json:"room_sid,omitempty"`
	Status              *VideoParticipantSummaryEnumRoomStatusEnum   `json:"status,omitempty"`
	URL                 *string                                      `json:"url,omitempty"`
}
