package operations

import (
	"openapi/pkg/models/shared"
)

var CreateRoomServerList = []string{
	"https://video.twilio.com",
}

type CreateRoomCreateRoomRequestStatusCallbackMethodEnum string

const (
	CreateRoomCreateRoomRequestStatusCallbackMethodEnumHead   CreateRoomCreateRoomRequestStatusCallbackMethodEnum = "HEAD"
	CreateRoomCreateRoomRequestStatusCallbackMethodEnumGet    CreateRoomCreateRoomRequestStatusCallbackMethodEnum = "GET"
	CreateRoomCreateRoomRequestStatusCallbackMethodEnumPost   CreateRoomCreateRoomRequestStatusCallbackMethodEnum = "POST"
	CreateRoomCreateRoomRequestStatusCallbackMethodEnumPatch  CreateRoomCreateRoomRequestStatusCallbackMethodEnum = "PATCH"
	CreateRoomCreateRoomRequestStatusCallbackMethodEnumPut    CreateRoomCreateRoomRequestStatusCallbackMethodEnum = "PUT"
	CreateRoomCreateRoomRequestStatusCallbackMethodEnumDelete CreateRoomCreateRoomRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateRoomCreateRoomRequest struct {
	AudioOnly                   *bool                                                `form:"name=AudioOnly"`
	EmptyRoomTimeout            *int64                                               `form:"name=EmptyRoomTimeout"`
	EnableTurn                  *bool                                                `form:"name=EnableTurn"`
	LargeRoom                   *bool                                                `form:"name=LargeRoom"`
	MaxParticipantDuration      *int64                                               `form:"name=MaxParticipantDuration"`
	MaxParticipants             *int64                                               `form:"name=MaxParticipants"`
	MediaRegion                 *string                                              `form:"name=MediaRegion"`
	RecordParticipantsOnConnect *bool                                                `form:"name=RecordParticipantsOnConnect"`
	RecordingRules              *interface{}                                         `form:"name=RecordingRules"`
	StatusCallback              *string                                              `form:"name=StatusCallback"`
	StatusCallbackMethod        *CreateRoomCreateRoomRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	Type                        *shared.RoomEnumRoomTypeEnum                         `form:"name=Type"`
	UniqueName                  *string                                              `form:"name=UniqueName"`
	UnusedRoomTimeout           *int64                                               `form:"name=UnusedRoomTimeout"`
	VideoCodecs                 []shared.RoomEnumVideoCodecEnum                      `form:"name=VideoCodecs"`
}

type CreateRoomSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateRoomRequest struct {
	ServerURL *string
	Request   *CreateRoomCreateRoomRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateRoomSecurity
}

type CreateRoomResponse struct {
	ContentType string
	StatusCode  int64
	VideoV1Room *shared.VideoV1Room
}
