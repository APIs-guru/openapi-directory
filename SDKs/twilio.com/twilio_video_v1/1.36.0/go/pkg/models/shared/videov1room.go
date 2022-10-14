package shared

import (
	"time"
)

type VideoV1RoomStatusCallbackMethodEnum string

const (
	VideoV1RoomStatusCallbackMethodEnumHead   VideoV1RoomStatusCallbackMethodEnum = "HEAD"
	VideoV1RoomStatusCallbackMethodEnumGet    VideoV1RoomStatusCallbackMethodEnum = "GET"
	VideoV1RoomStatusCallbackMethodEnumPost   VideoV1RoomStatusCallbackMethodEnum = "POST"
	VideoV1RoomStatusCallbackMethodEnumPatch  VideoV1RoomStatusCallbackMethodEnum = "PATCH"
	VideoV1RoomStatusCallbackMethodEnumPut    VideoV1RoomStatusCallbackMethodEnum = "PUT"
	VideoV1RoomStatusCallbackMethodEnumDelete VideoV1RoomStatusCallbackMethodEnum = "DELETE"
)

type VideoV1Room struct {
	AccountSid                   *string                              `json:"account_sid,omitempty"`
	AudioOnly                    *bool                                `json:"audio_only,omitempty"`
	DateCreated                  *time.Time                           `json:"date_created,omitempty"`
	DateUpdated                  *time.Time                           `json:"date_updated,omitempty"`
	Duration                     *int64                               `json:"duration,omitempty"`
	EmptyRoomTimeout             *int64                               `json:"empty_room_timeout,omitempty"`
	EnableTurn                   *bool                                `json:"enable_turn,omitempty"`
	EndTime                      *time.Time                           `json:"end_time,omitempty"`
	LargeRoom                    *bool                                `json:"large_room,omitempty"`
	Links                        map[string]interface{}               `json:"links,omitempty"`
	MaxConcurrentPublishedTracks *int64                               `json:"max_concurrent_published_tracks,omitempty"`
	MaxParticipantDuration       *int64                               `json:"max_participant_duration,omitempty"`
	MaxParticipants              *int64                               `json:"max_participants,omitempty"`
	MediaRegion                  *string                              `json:"media_region,omitempty"`
	RecordParticipantsOnConnect  *bool                                `json:"record_participants_on_connect,omitempty"`
	Sid                          *string                              `json:"sid,omitempty"`
	Status                       *RoomEnumRoomStatusEnum              `json:"status,omitempty"`
	StatusCallback               *string                              `json:"status_callback,omitempty"`
	StatusCallbackMethod         *VideoV1RoomStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
	Type                         *RoomEnumRoomTypeEnum                `json:"type,omitempty"`
	UniqueName                   *string                              `json:"unique_name,omitempty"`
	UnusedRoomTimeout            *int64                               `json:"unused_room_timeout,omitempty"`
	URL                          *string                              `json:"url,omitempty"`
	VideoCodecs                  []RoomEnumVideoCodecEnum             `json:"video_codecs,omitempty"`
}
