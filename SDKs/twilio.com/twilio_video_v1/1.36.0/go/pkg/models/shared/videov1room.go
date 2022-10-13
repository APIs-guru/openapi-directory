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
	AccountSid                   *string                              `json:"account_sid"`
	AudioOnly                    *bool                                `json:"audio_only"`
	DateCreated                  *time.Time                           `json:"date_created"`
	DateUpdated                  *time.Time                           `json:"date_updated"`
	Duration                     *int64                               `json:"duration"`
	EmptyRoomTimeout             *int64                               `json:"empty_room_timeout"`
	EnableTurn                   *bool                                `json:"enable_turn"`
	EndTime                      *time.Time                           `json:"end_time"`
	LargeRoom                    *bool                                `json:"large_room"`
	Links                        map[string]interface{}               `json:"links"`
	MaxConcurrentPublishedTracks *int64                               `json:"max_concurrent_published_tracks"`
	MaxParticipantDuration       *int64                               `json:"max_participant_duration"`
	MaxParticipants              *int64                               `json:"max_participants"`
	MediaRegion                  *string                              `json:"media_region"`
	RecordParticipantsOnConnect  *bool                                `json:"record_participants_on_connect"`
	Sid                          *string                              `json:"sid"`
	Status                       *RoomEnumRoomStatusEnum              `json:"status"`
	StatusCallback               *string                              `json:"status_callback"`
	StatusCallbackMethod         *VideoV1RoomStatusCallbackMethodEnum `json:"status_callback_method"`
	Type                         *RoomEnumRoomTypeEnum                `json:"type"`
	UniqueName                   *string                              `json:"unique_name"`
	UnusedRoomTimeout            *int64                               `json:"unused_room_timeout"`
	URL                          *string                              `json:"url"`
	VideoCodecs                  []RoomEnumVideoCodecEnum             `json:"video_codecs"`
}
