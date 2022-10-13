package shared

import (
	"time"
)

type VideoV1RoomRoomParticipantRoomParticipantAnonymize struct {
	AccountSid  *string                                 `json:"account_sid"`
	DateCreated *time.Time                              `json:"date_created"`
	DateUpdated *time.Time                              `json:"date_updated"`
	Duration    *int64                                  `json:"duration"`
	EndTime     *time.Time                              `json:"end_time"`
	Identity    *string                                 `json:"identity"`
	RoomSid     *string                                 `json:"room_sid"`
	Sid         *string                                 `json:"sid"`
	StartTime   *time.Time                              `json:"start_time"`
	Status      *RoomParticipantAnonymizeEnumStatusEnum `json:"status"`
	URL         *string                                 `json:"url"`
}
