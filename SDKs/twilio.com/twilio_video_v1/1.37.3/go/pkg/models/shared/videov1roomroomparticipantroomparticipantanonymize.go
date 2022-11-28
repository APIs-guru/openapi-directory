package shared

import (
	"time"
)

type VideoV1RoomRoomParticipantRoomParticipantAnonymize struct {
	AccountSid  *string                                 `json:"account_sid,omitempty"`
	DateCreated *time.Time                              `json:"date_created,omitempty"`
	DateUpdated *time.Time                              `json:"date_updated,omitempty"`
	Duration    *int64                                  `json:"duration,omitempty"`
	EndTime     *time.Time                              `json:"end_time,omitempty"`
	Identity    *string                                 `json:"identity,omitempty"`
	RoomSid     *string                                 `json:"room_sid,omitempty"`
	Sid         *string                                 `json:"sid,omitempty"`
	StartTime   *time.Time                              `json:"start_time,omitempty"`
	Status      *RoomParticipantAnonymizeEnumStatusEnum `json:"status,omitempty"`
	URL         *string                                 `json:"url,omitempty"`
}
