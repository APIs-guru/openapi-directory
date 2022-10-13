package shared

import (
	"time"
)

type InsightsV1VideoRoomSummaryVideoParticipantSummary struct {
	AccountSid          *string                                      `json:"account_sid"`
	Codecs              []VideoParticipantSummaryEnumCodecEnum       `json:"codecs"`
	DurationSec         *int64                                       `json:"duration_sec"`
	EdgeLocation        *VideoParticipantSummaryEnumEdgeLocationEnum `json:"edge_location"`
	EndReason           *string                                      `json:"end_reason"`
	ErrorCode           *int64                                       `json:"error_code"`
	ErrorCodeURL        *string                                      `json:"error_code_url"`
	JoinTime            *time.Time                                   `json:"join_time"`
	LeaveTime           *time.Time                                   `json:"leave_time"`
	MediaRegion         *VideoParticipantSummaryEnumTwilioRealmEnum  `json:"media_region"`
	ParticipantIdentity *string                                      `json:"participant_identity"`
	ParticipantSid      *string                                      `json:"participant_sid"`
	Properties          *interface{}                                 `json:"properties"`
	PublisherInfo       *interface{}                                 `json:"publisher_info"`
	RoomSid             *string                                      `json:"room_sid"`
	Status              *VideoParticipantSummaryEnumRoomStatusEnum   `json:"status"`
	URL                 *string                                      `json:"url"`
}
