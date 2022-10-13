package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRoomServers = []string{
	"https://video.twilio.com",
}

type UpdateRoomPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateRoomRequestBodyUpdateRoomRequest struct {
	Status shared.RoomEnumRoomStatusEnum `form:"name=Status"`
}

type UpdateRoomSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateRoomRequest struct {
	ServerURL  *string
	PathParams UpdateRoomPathParams
	Request    *UpdateRoomRequestBodyUpdateRoomRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateRoomSecurity
}

type UpdateRoomResponse struct {
	ContentType string
	StatusCode  int64
	VideoV1Room *shared.VideoV1Room
}
